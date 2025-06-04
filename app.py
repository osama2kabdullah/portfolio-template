from flask import Flask, render_template, redirect, url_for, session, request
import sqlite3
import os

app = Flask(__name__)
app.secret_key = "your-secret-key"  # Replace with a secure key in production

DATABASE = os.path.join(os.path.dirname(__file__), 'db', 'data.db')

# Helper to check login
def is_logged_in():
    return 'user_id' in session

# @app.route("/")
# def index():
#     if is_logged_in():
#         return redirect(url_for('account'))
#     else:
#         return redirect(url_for('login'))
    
@app.route("/")
def index():
    user = None
    # if is_logged_in():
    #     # You can expand this to load user info if needed
    #     user = {
    #         "id": session["user_id"],
    #         "username": session.get("username", "User"),
    #         "profile_image": session.get("profile_image", None)  # Optional
    #     }
    return render_template("index.html", user=user)

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM users WHERE username = ? AND password = ?", (username, password))
        user = cursor.fetchone()
        conn.close()

        if user:
            session['user_id'] = user[0]
            return redirect(url_for('account'))
        else:
            return render_template("login.html", error="Invalid credentials")

    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
        conn.commit()
        conn.close()

        return redirect(url_for('login'))

    return render_template("register.html")

@app.route("/account")
def account():
    if not is_logged_in():
        return redirect(url_for('login'))
    return render_template("account.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True)
