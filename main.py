# -*- coding: utf-8 -*-

from flask import Flask
from config import SERVER_HOST, SERVER_PORT, DEBUG, APP_SECRET
from rests.base import base


app = Flask(__name__)
app.secret_key = APP_SECRET

# Rest layers
app.register_blueprint(base)

if __name__ == "__main__":
    app.run(host=SERVER_HOST, port=SERVER_PORT, debug=DEBUG, threaded=True)
