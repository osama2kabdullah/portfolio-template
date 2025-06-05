from flask import Flask
from app.routes import main
from config import Config
from app.db_utils import db  # ✅ Now import db from db_utils
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)  # ✅ Bind DB to app

    app.register_blueprint(main)

    return app
