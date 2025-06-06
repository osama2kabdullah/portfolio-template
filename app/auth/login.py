from flask import render_template, request, redirect, url_for, session
from app.models import Freelancer
from app.extensions import db
from app.utils import verify_password
from . import auth_bp

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    # ✅ Prevent access if already logged in
    if session.get('user_id'):
        return redirect(url_for('page.index'))  # redirect to home or dashboard

    error = None

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        freelancer = Freelancer.query.filter_by(email=email).first()

        if freelancer and verify_password(freelancer.password_hash, password):
            session['user_id'] = freelancer.id
            session['user_name'] = freelancer.full_name

            # ✅ Update last login time
            freelancer.last_login = db.func.now()
            db.session.commit()

            return redirect(url_for('page.index'))  # change if needed

        error = "Invalid email or password."

    return render_template('login.html', error=error)

@auth_bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('auth.login'))
