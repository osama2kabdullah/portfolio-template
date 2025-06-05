from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

db = SQLAlchemy()

def get_all_users():
    sql = text("SELECT * FROM users")
    result = db.session.execute(sql)
    return result.fetchall()
