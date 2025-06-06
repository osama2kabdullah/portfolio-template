from flask import Blueprint, render_template
from app.db_utils import get_demo_portfolio_image

page = Blueprint('page', __name__)

@page.route('/')
def index():
    image = get_demo_portfolio_image()
    print('Image:', image)
    return render_template('index.html', demo_image=image)
