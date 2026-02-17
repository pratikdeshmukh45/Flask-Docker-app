from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask backend is running!"

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form or request.json

    name = data.get('name')
    message = data.get('message')

    print(f"Received: {name} - {message}")

    return jsonify({
        "status": "success",
        "message": f"Hello {name}, your message was received!"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
