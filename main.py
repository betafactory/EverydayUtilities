from flask import Flask
from config import SERVER_HOST, SERVER_PORT, DEBUG
import rests

app = Flask(__name__)

if __name__ == "__main__":
    app.run(host=SERVER_HOST, port=SERVER_PORT, debug=DEBUG)
