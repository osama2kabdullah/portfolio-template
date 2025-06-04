from flask import Flask, render_template, request
import sqlite3
import os

app = Flask(__name__)
DATABASE = os.path.join(os.path.dirname(__file__), 'db', 'data.db')

@app.route("/")
def home():
    # conn = sqlite3.connect(DATABASE)
    # cursor = conn.cursor()
    # cursor.execute("""
    #     SELECT * FROM projects
    # """)
    # projects = cursor.fetchall()
    # conn.close()
    return render_template("home.html")

@app.route("/api/projects")
def projects():
    projects_data = [
        {"title": "AI Portfolio", "desc": "Built with Python"},
        {"title": "Web App", "desc": "Node.js based"},
    ]
    return render_template("partials/projects.html", projects=projects_data)

@app.route("/api/contact")
def contact():
    return render_template("partials/contact.html")

if __name__ == "__main__":
    app.run(debug=True)
