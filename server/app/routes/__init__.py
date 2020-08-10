from app import api
from app.routes.shorten import Shortener
from app.routes.check import Checker
from app.routes.report import Report, ConfirmReport

# uncomment the following after building React static files
# import app.routes.serve_static
import app.routes.redirector

api.add_resource(Shortener, '/api/1.0/shorten', endpoint='shorten')
api.add_resource(Checker, '/api/1.0/check', endpoint='check')
api.add_resource(Report, '/api/1.0/report', endpoint='report')
api.add_resource(ConfirmReport, '/api/1.0/report/confirm', endpoint='confirm_report')