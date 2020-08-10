from flask import request, make_response
from flask_restful import Resource

from app.utils.url import find_url

class Checker(Resource):

    def get(self):
        
        route = request.args.get('route', None)
        if not route:
            return make_response({ 'success': False, 'message': 'please specify a url' }, 400)
        
        route_data = find_url(route)

        if not route_data:
            return make_response({ 'success': False, 'message': 'url not found' }, 404)

        return make_response({ 'success': True, 'data': route_data })