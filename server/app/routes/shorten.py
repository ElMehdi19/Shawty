from flask import make_response, request
from flask_restful import Resource, reqparse

from app.utils.url import valid_url, save_url

class Shortener(Resource):

    def __init__(self):

        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('url', required=True, type=str, location='json')

    def post(self):
        
        args = self.reqparse.parse_args()
        url = valid_url(args['url'])

        if not url:
            return make_response({ 'success': False, 'message': 'invalid url' }, 400)
        
        user_info = {
            'remote_addr': request.remote_addr,
            'user_agent': request.user_agent.string
        }

        new_url = save_url(url, user_info)

        return make_response({ 'success': True, 'data': new_url }, 200)