from app.extensions import db
from sqlalchemy import text

def get_all_users():
    sql = text("SELECT * FROM users")
    result = db.session.execute(sql)
    return result.fetchall()

def get_demo_portfolio_image():
    sql = text("SELECT url, alt_text FROM media WHERE caption = :caption LIMIT 1")
    result = db.session.execute(sql, {'caption': 'Demo portfolio page'})
    row = result.fetchone()
    if row:
        return {'url': row.url, 'alt_text': row.alt_text}
    return None

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