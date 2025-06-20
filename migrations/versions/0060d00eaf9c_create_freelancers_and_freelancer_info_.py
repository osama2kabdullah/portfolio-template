"""Create freelancers and freelancer_info tables

Revision ID: 0060d00eaf9c
Revises: f709c45a266e
Create Date: 2025-06-06 20:58:15.293352

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0060d00eaf9c'
down_revision = 'f709c45a266e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('freelancers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('password_hash', sa.Text(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('last_login', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('freelancer_info',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('freelancer_id', sa.Integer(), nullable=False),
    sa.Column('security_question', sa.String(), nullable=False),
    sa.Column('security_answer_hash', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['freelancer_id'], ['freelancers.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('freelancer_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('freelancer_info')
    op.drop_table('freelancers')
    # ### end Alembic commands ###
