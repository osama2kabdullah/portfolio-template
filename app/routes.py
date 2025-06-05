from flask import Blueprint, render_template
from app.db_utils import get_all_users

main = Blueprint('main', __name__)

@main.route('/')
def index():
    users = get_all_users()
    return render_template('index.html', users=users)

@main.route('/login')
def login():
    return render_template('login.html')
