from app.extensions import db
from datetime import datetime

class Freelancer(db.Model):
    __tablename__ = 'freelancers'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password_hash = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime)

    info = db.relationship('FreelancerInfo', backref='freelancer', uselist=False, cascade="all, delete")

class FreelancerInfo(db.Model):
    __tablename__ = 'freelancer_info'

    id = db.Column(db.Integer, primary_key=True)
    freelancer_id = db.Column(db.Integer, db.ForeignKey('freelancers.id'), nullable=False, unique=True)
    security_question = db.Column(db.String, nullable=False)
    security_answer_hash = db.Column(db.Text, nullable=False)
