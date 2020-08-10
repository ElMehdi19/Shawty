import contextlib
import json
from urllib.request import urlopen
from random import choice
from typing import Dict

from app import db
from app.models.urls import Url

def get_ip_data(route: str, ip: str) -> Dict[str, str]:
    """Function that uses an external API to geolocate 
       shortened URLs visitors, and update the visitors
       and total_visitors columns in the Url table

       Paramters:
       route: Short URL route visited
       ip: Visitor IP address 

       Returns:
       dict: Dictionary with the user location info
    """

    url = Url.query.filter_by(short_route=route).first()
    visitors = dict(url.visitors)

    if ip in ['127.0.0.1', '::1']:
        ip_list = ['105.154.44.23', '51.79.145.244', '137.220.52.72', '167.99.181.81']
        ip = choice(ip_list)

    base = f'http://www.geoplugin.net/json.gp?ip={ip}'

    with contextlib.closing(urlopen(base)) as handler:
        resp = json.loads(handler.read().decode())
    
    country = resp['geoplugin_countryName']
    visitors[country] = visitors.get(country, 0) + 1
    
    setattr(url, 'visitors', visitors)
    url.total_visitors += 1 

    db.session.commit()

    return resp