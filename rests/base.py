from flask import Blueprint, request, current_app as this
from routes import UTILITY_RUNNER_PATH

base = Blueprint('base', __name__)

@base.route(UTILITY_RUNNER_PATH, methods=['GET'])
def utility_runner():
    data = request.form.to_dict(flat=False)
    # this.logger.info("logging!")
    return {
        "status": True,
        "message": ""
    }