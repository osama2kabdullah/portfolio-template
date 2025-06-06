from flask import Blueprint, jsonify, request
from werkzeug.utils import secure_filename
from app.cloudinary_config import cloudinary
import cloudinary.uploader
from app.db_utils import upload_image_to_db, allowed_file

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_images():
    return jsonify({"message": "API Dead"}), 404
