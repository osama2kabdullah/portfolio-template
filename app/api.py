from flask import Blueprint, jsonify
from sqlalchemy import text
from app.extensions import db  # Assuming you're using extensions.py

jsonbp = Blueprint('api_json', __name__)  # ✅ Renamed here

@jsonbp.route('/images', methods=['GET'])
def get_gallery():
    try:
        sql = text("SELECT * FROM uploaded_images")
        result = db.session.execute(sql)
        images = result.fetchall()
        
        image_list = [
            {
                "id": img.id,
                "image_url": img.image_url,
                "file_name": img.file_name,
                "file_size": img.file_size
            }
            for img in images
        ]
        
        return jsonify({"images": image_list}), 200
    except Exception as e:
        print("Error retrieving gallery:", e)
        return jsonify({"error": str(e)}), 500
