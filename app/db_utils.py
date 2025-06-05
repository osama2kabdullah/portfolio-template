from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

db = SQLAlchemy()

def insert_user(username, email):
    sql = text("INSERT INTO users (username, email) VALUES (:username, :email)")
    db.session.execute(sql, {"username": username, "email": email})
    db.session.commit()

def get_all_users():
    sql = text("SELECT * FROM users")
    result = db.session.execute(sql)
    return result.fetchall()
