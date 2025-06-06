from flask import render_template, request, redirect, session, url_for
from app.models import Freelancer, FreelancerInfo
from app.extensions import db
from app.utils import hash_password
from sqlalchemy.exc import IntegrityError
from . import auth_bp

@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    # ✅ Prevent access if already logged in
    if session.get('user_id'):
        return redirect(url_for('page.index'))  # redirect to home or dashboard
    
    error = None

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        security_question = request.form.get('security_question')
        security_answer = request.form.get('security_answer')

        if password != confirm_password:
            error = "Passwords do not match."
        elif not all([name, email, password, security_question, security_answer]):
            error = "Please fill in all fields."
        else:
            try:
                freelancer = Freelancer(
                    full_name=name,
                    email=email,
                    password_hash=hash_password(password)
                )
                db.session.add(freelancer)
                db.session.flush()  # gets the freelancer.id before commit

                info = FreelancerInfo(
                    freelancer_id=freelancer.id,
                    security_question=security_question,
                    security_answer_hash=hash_password(security_answer)
                )
                db.session.add(info)
                db.session.commit()

                return redirect(url_for('auth.login'))  # login route (you’ll create later)

            except IntegrityError:
                db.session.rollback()
                error = "Email already registered."
            except Exception as e:
                db.session.rollback()
                error = f"Unexpected error: {str(e)}"

    return render_template('register.html', error=error)
