from app import app as flask_app

# to be served on production after building React static files

@flask_app.route('/')
@flask_app.route('/shorten')
@flask_app.route('/track')
@flask_app.route('/report')
def home():
    return flask_app.send_static_file('index.html')

@flask_app.route('/report/<string:token>')
def report_confirmation(token):
    return flask_app.send_static_file('index.html')