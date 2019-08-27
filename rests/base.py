from main import app
from routes import UTILITY_RUNNER_PATH

@app.route(UTILITY_RUNNER_PATH, methods=['GET'])
def utility_runner():
    data = request.form.to_dict(flat=False)
    print(data)
    return {
        "status": True,
        "message": ""
    }