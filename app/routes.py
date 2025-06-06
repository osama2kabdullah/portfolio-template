from flask import Blueprint, render_template

page = Blueprint('page', __name__)

@page.route('/')
def index():
    return render_template('index.html')

@page.route('/login')
def login():
    return render_template('login.html')

@page.route('/register')
def register():
    return render_template('register.html')

@page.route('/forgot_password')
def forgot_password():
    return render_template('forgot-password.html')
