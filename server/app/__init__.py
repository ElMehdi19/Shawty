from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS
from flask_mail import Mail
from redis import Redis
from rq import Queue

from app.config import Config


# app = Flask(__name__, static_folder="../client/build", static_url_path="/")
app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
api = Api(app)
cors = CORS(app, resource={r"/api/*": {"origins": r'*' }})
mail = Mail(app)

r = Redis()
q = Queue(connection=r)

from app import routes