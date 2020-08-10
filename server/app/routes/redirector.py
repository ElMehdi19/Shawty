from flask import redirect, request, make_response

from app import app, q
from app.models.urls import Url
from app.utils.user import get_ip_data


@app.route('/<string:short_route>')
def redirector(short_route):
    
    url = Url.query.filter_by(short_route=short_route).first()
    
    if url:
        q.enqueue(get_ip_data, url.short_route, request.remote_addr)
        destination = url.original_url
        
        return redirect(destination, 301)

    return redirect(request.host_url)
