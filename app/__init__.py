from flask import Flask
from app.routes import main
from config import Config  # Import your config class
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

# Load environment variables from .env file (in dev only)
load_dotenv()

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Register blueprints
    app.register_blueprint(main)

    # Initialize extensions with app
    db.init_app(app)
    migrate.init_app(app, db)

    return app
