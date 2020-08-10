from flask import make_response
from flask_restful import Resource, reqparse
from app.utils.url import find_url
from app.utils.report import validate_email, send_report_email, save_report, check_jwt


class Report(Resource):

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('url', type=str, required=True, location='json')
        self.reqparse.add_argument('email', type=str, required=True, location='json')
        self.reqparse.add_argument('details', type=str, required=True, location='json')

    def post(self):
        args = self.reqparse.parse_args()

        if not validate_email(args['email']):
            return make_response({ 'success': False, 'message': 'invalid email address' }, 400)

        id = find_url(args['url'], id_only=True)
        
        if not id:
            return make_response({ 'success': False, 'message': 'url not found' }, 404)
        

        send_report_email(args['email'], args['details'], id)
        return make_response({ 'success': True }, 200)


class ConfirmReport(Resource):

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('token', required=True, type=str, location='json')

    def post(self):
        args = self.reqparse.parse_args()
        
        valid_jwt = check_jwt(args['token'])
        if not valid_jwt:
            return make_response({ 'success': False }, 400)

        save_report(valid_jwt['email'], valid_jwt['details'], valid_jwt['url_id'])

        return make_response({ 'success': True }, 200)