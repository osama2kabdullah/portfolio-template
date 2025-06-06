from app.extensions import db
from sqlalchemy import text

def get_all_users():
    sql = text("SELECT * FROM users")
    result = db.session.execute(sql)
    return result.fetchall()

def upload_image_to_db(image_url, file_name, file_size):
    sql = text("""
        INSERT INTO uploaded_images (image_url, file_name, file_size)
        VALUES (:image_url, :file_name, :file_size)
    """)
    db.session.execute(sql, {
        'image_url': image_url,
        'file_name': file_name,
        'file_size': file_size
    })
    db.session.commit()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'jpg', 'jpeg', 'png', 'gif'}