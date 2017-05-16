from flask import Flask
from models import psql_db, initialize_db

app = Flask(__name__)

@app.before_request
def before_request():
    initialize_db()

@app.teardown_request
def teardown_request(exc):
    psql_db.close()

@app.route('/')
def home():
    return 'Hello world'

if __name__ == '__main__':
    app.run(debug=True, port=5001)
