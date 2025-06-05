# Portfolio Template

This is a portfolio landing page builder. Users can register, create a profile, and get a public link to share. I personally use this web app to build my own portfolio landing page.

---

## 🔧 Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** Bootstrap, HTML, CSS, JS
- **Database:** PostgreSQL
- **Templating:** Jinja2 (default with Flask)
- **Deployment:** GitHub Actions + Render (suggested)

---

## 🚀 Getting Started (Local Setup)

### 1. Clone this repository

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-template.git
cd portfolio-template
```

### 2. Set up virtual environment

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Environment variables

Create a `.env` file in the root directory:

```env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your_secret_key
SQLALCHEMY_DATABASE_URI=postgresql://username:password@localhost:5432/dbname
```

> Replace `username`, `password`, `localhost`, `5432`, and `dbname` with your PostgreSQL credentials.

---

### 5. Set up the PostgreSQL database manually

1. Ensure PostgreSQL is installed and running on your machine.
2. Create the database (via terminal or pgAdmin).
3. Run the provided `schema.sql` to create tables:

```bash
psql -U your_username -d dbname -f schema.sql
```

> Make sure `schema.sql` contains your table definitions (you can ask me to help generate it).

---

### 6. Run the application

```bash
flask run
```

Open your browser: [http://localhost:5000](http://localhost:5000)

---

## 📦 Deployment

### Hosting Options:

- ✅ **Render** – great for Flask apps with PostgreSQL support and simple CI/CD.
- [ ] Railway
- [ ] Fly.io

### Render Deployment Steps:

1. Push code to GitHub.
2. Go to [Render](https://render.com/).
3. Create a new **Web Service**:
   - Connect to your GitHub repo.
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn run:app`
4. Add environment variables via Render dashboard:
   - `FLASK_ENV=production`
   - `SECRET_KEY=your_secret`
   - `SQLALCHEMY_DATABASE_URI=postgresql://...` *(your Render PostgreSQL connection string)*

---

## 📄 Project Overview

This is a portfolio landing page builder:
- Users can register and log in.
- Each user has a dashboard to manage their profile.
- A public, shareable link is generated for each profile.

---

## 👨‍💻 Author

Built by Md Abdullah. This is part of my personal portfolio and learning path as a developer.
