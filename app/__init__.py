from flask import Flask
from app.routes import page
from app.forms import upload_bp
from app.api import jsonbp
from config import Config
from dotenv import load_dotenv
from app.extensions import db 

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    app.register_blueprint(page)
    app.register_blueprint(upload_bp)
    app.register_blueprint(jsonbp)

    return app
