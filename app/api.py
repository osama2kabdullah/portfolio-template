from flask import Blueprint, jsonify
from sqlalchemy import text
from app.extensions import db  # Assuming you're using extensions.py

jsonbp = Blueprint('api_json', __name__)  # ✅ Renamed here

@jsonbp.route('/images', methods=['GET'])
def get_gallery():
    return jsonify({"message": "API Dead"}), 404