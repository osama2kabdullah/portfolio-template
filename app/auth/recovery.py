from flask import render_template, request, redirect, url_for, session
from app.models import Freelancer, FreelancerInfo
from app.extensions import db
from app.utils import verify_password, hash_password
from . import auth_bp

# STEP 1: Enter email to recover
@auth_bp.route('/recover', methods=['GET', 'POST'])
def recover_password():
    if session.get('user_id'):
        return redirect(url_for('page.index'))

    error = None

    if request.method == 'POST':
        email = request.form.get('email')
        freelancer = Freelancer.query.filter_by(email=email).first()

        if freelancer:
            info = FreelancerInfo.query.filter_by(freelancer_id=freelancer.id).first()
            if info:
                session['recovery_user_id'] = freelancer.id
                return render_template('recovery_question.html',
                                       question=info.security_question)
            else:
                error = "No recovery info found for this account."
        else:
            error = "Email not found."

    return render_template('forgot-password.html', error=error)

# STEP 2: Verify answer to security question
@auth_bp.route('/recover/verify', methods=['POST'])
def verify_security_answer():
    if session.get('user_id'):
        return redirect(url_for('page.index'))

    freelancer_id = session.get('recovery_user_id')
    if not freelancer_id:
        return redirect(url_for('auth.recover_password'))

    answer = request.form.get('security_answer')
    info = FreelancerInfo.query.filter_by(freelancer_id=freelancer_id).first()

    if info and verify_password(info.security_answer_hash, answer):
        return render_template('reset_password.html')
    else:
        error = "Incorrect answer."
        return render_template('recovery_question.html', question=info.security_question, error=error)

# STEP 3: Reset the password
@auth_bp.route('/recover/reset', methods=['POST'])
def reset_password():
    if session.get('user_id'):
        return redirect(url_for('page.index'))

    freelancer_id = session.get('recovery_user_id')
    if not freelancer_id:
        return redirect(url_for('auth.recover_password'))

    password = request.form.get('password')
    confirm = request.form.get('confirm_password')

    if password != confirm:
        error = "Passwords do not match."
        return render_template('reset_password.html', error=error)

    freelancer = Freelancer.query.get(freelancer_id)
    if freelancer:
        freelancer.password_hash = hash_password(password)
        db.session.commit()
        session.pop('recovery_user_id', None)
        return redirect(url_for('auth.login'))
    else:
        return redirect(url_for('auth.recover_password'))
