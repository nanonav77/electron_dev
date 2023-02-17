from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/',methods = ['GET'])
def getInit():
    return jsonify({"Hello":"Nano"})

if __name__ == "_main_":
   app.run(debug=True)