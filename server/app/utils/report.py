import re
from typing import Dict, Union
from flask import request, url_for
from flask_mail import Message
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from urllib.parse import urljoin

from app import app, mail, db
from app.models.urls import Url
from app.models.reports import Report

def get_jwt(email: str, details: str, url_id: int, expires=1800) -> str:
    """Function that generates a JWT with reports
       data serialized on it.

       Paramters:
       email (str): reporter's email, used to confirm the report later
       ip (str): reporter's IP address
       
       Returns:
       str: JSON WEB TOKEN
    """
    serializer = Serializer(app.config['SECRET_KEY'], expires_in=expires)

    return serializer.dumps(
        { 
            'email': email, 
            'url_id': url_id, 
            'details': details 
        }).decode()

def check_jwt(token: str) -> Union[bool, Dict[str, str]]:
    """Function that check if a JWT is valid

       Paramters:
       token (str): JWT
       
       Returns:
       False: if the given token is invalid
       dict: serilized data in the jwt if its valid
    """
    serializer = Serializer(app.config['SECRET_KEY'])

    try:
        email = serializer.loads(token)['email']
        url_id = serializer.loads(token)['url_id']
        details = serializer.loads(token)['details']

    except Exception:
        return False

    return { 'email': email, 'url_id': url_id, 'details': details }

def validate_email(email: str):
    """Function that relies on regex to validate
       a given email address

       Paramters:
       email (str): email address
    """

    pattern = re.compile('[a-z0-9_.+~-]+@[a-z0-9.-]+\.[a-z0-9]+$', re.I)
    matches = pattern.match(email)

    return matches

def send_report_email(email: str, details: str, url_id: int) -> None:
    """Function that send emails

       Paramters:
       email (str): email address
       details (str): report details
       url_id (int): row id in the Url table of the reported url

    """

    token = get_jwt(email, details, url_id)

    # in dev mode, this url will be handled by React Router
    # in prod mode, Flask will serve the appropriate static file from React
    # link = urljoin(request.host_url, f'report/{token}')
    link = f'http://127.0.0.1:3000/report/{token}'

    msg = Message()
    msg.recipients = [email]
    msg.sender = 'support@trancate.me'
    msg.subject = 'Trancate URL Report'
    msg.html = f"""Hi, Please use the following link to confirm the report:
    <a href={link}>{link}</a>
    """ 
    mail.send(msg)
    

def save_report(email: str, details: str, url_id: str) -> None:
    """Function that save report to the Reports table

       Paramters:
       email (str): email address
       details (str): report details
       url_id (int): row id in the Url table of the reported url

    """    

    url = Url.query.get(url_id)
    reports = url.reports

    for report in reports:
        if report.email == email:
            return

    url.total_reports += 1 
    report = Report(email=email, user_ip=request.remote_addr, details=details, url_id=url_id)

    db.session.add(report)
    db.session.commit()