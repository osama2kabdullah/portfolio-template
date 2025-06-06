from flask import Blueprint, jsonify, request
from werkzeug.utils import secure_filename
from app.cloudinary_config import cloudinary
import cloudinary.uploader
from app.db_utils import upload_image_to_db, allowed_file

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_images():
    image_fields = ['images1', 'images2', 'images3']
    results = []

    try:
        for field in image_fields:
            file = request.files.get(field)

            if not file:
                continue  # Skip if no file selected in this field

            if not allowed_file(file.filename):
                return jsonify({"error": f"Invalid file type for {file.filename}"}), 400

            file.seek(0, 2)  # Move to end of file to get size
            file_length = file.tell()
            file.seek(0)    # Reset file pointer

            if file_length > 2 * 1024 * 1024:
                return jsonify({"error": f"{file.filename} exceeds 2MB limit."}), 400

            # Upload to Cloudinary
            upload_result = cloudinary.uploader.upload(file)
            image_url = upload_result['secure_url']
            filename = secure_filename(file.filename)

            # Save to DB
            upload_image_to_db(image_url=image_url, file_name=filename, file_size=file_length)

            results.append({
                "filename": filename,
                "url": image_url
            })

        return jsonify({"uploaded": results}), 200

    except Exception as e:
        print("Upload error:", e)
        return jsonify({"error": str(e)}), 500
