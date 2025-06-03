from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
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
