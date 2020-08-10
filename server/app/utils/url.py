import re
from typing import Union, Dict
from string import (ascii_lowercase, ascii_uppercase, digits)
from random import sample
from urllib.request import urljoin
from flask import request

from app import db
from app.models.urls import Url

def valid_url(url: str) -> Union[bool, str]:
    """Function that relies on regex check if 
       a given URL is valid.

       Paramters:
       url (str): Short URL route visited
       
       Returns:
       False: if the url is invalid
       str: the url if it's valid
    """

    url = url if url.startswith('http') else f'http://{url}'

    pattern = re.compile(r'^https?:\/\/([a-z0-9-.]{1,63}\.)?[a-z0-9-.]{1,63}\.[a-z]{1,21}(/.*)?$')
    matches = pattern.search(url)

    if not matches:
        return False
    
    return url

def gen_unique_route() -> str:
    """Function that generates a unique route
       by creating a random one and comparing
       to those short routes in the database

       Returns
       str: the random route

    """

    while True:
        prefix = ''.join(sample(ascii_uppercase, 2))
        middle = ''.join(sample(ascii_lowercase, 2))
        suffix = ''.join(sample(digits, 2))
        route = prefix + middle + suffix

        route_exists = Url.query.filter_by(short_route=route).first()

        if not route_exists:
            break

    return route

def save_url(url: str, user_info=None) -> Dict[str, str]:
    """Function that calls the gen_unique_route route func
       to generate a unique route and then saves to a new
       row in the Url table

        Paramters:
        url (str): URL to be shortened
        user_info (dict): User location info

        Returns:
        dict: Dictionary with 2 properties
    """
    new_route = gen_unique_route()
    new_url = Url(original_url=url, short_route=new_route, user_info=user_info)

    db.session.add(new_url)
    db.session.commit()

    url = Url.query.filter_by(short_route=new_route).first()
    url_dict = url.as_dict

    response = { 
        'original_url': url_dict['original_url'], 
        'short_url': urljoin(request.host_url, url_dict['short_route']) 
        }

    return response

def find_url(route: str, id_only=False) -> Union[int, Dict[str, str]]:
    """Function that fetch a row from Url table

       Paramters:
       route (str): Short URL route
       id_only (bool): if sat to true function will only 
                       return the row id
        
        Return:
        int: if id_only=True
        dict: row as a dict if id_only=False
    """
    
    route = route if not route.startswith(request.host_url) else route.split('/')[-1]
    url_row = Url.query.filter_by(short_route=route).first()

    if not url_row:
        return None

    url_data = url_row.as_dict

    if id_only:
        return url_data['id']

    return {
        'id': url_data['id'],
        'short_route': url_data['short_route'],
        'original_url': url_data['original_url'],
        'total_visitors': url_data['total_visitors'],
        'visitors': url_data['visitors']
        }
