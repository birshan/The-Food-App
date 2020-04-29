from flask import Flask, render_template, request, redirect, flash, url_for, jsonify
from werkzeug.utils import secure_filename
from datetime import datetime
import cv2
import numpy as np
import os


UPLOAD_FOLDER = 'D:\IIT\Group Project\The-Food-App\DataScience\SDGP\FlaskApp\images'
ALLOWED_EXTENTIONS = {'jpeg', 'jpg', 'png'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
directory = 'D:\IIT\Group Project\The-Food-App\DataScience\SDGP\FlaskApp\images'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENTIONS


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    print(request)
    value = {
        "connection": True
    }
    return value


@app.route('/upload_image/', methods=['POST', 'GET'])
def upload_image():
    if request.method == 'POST':
        print(request)
        # checking for file
        if 'file' not in request.files:
            print('no file')
            raise InvalidUsage("No file uploaded", status_code=409)
        file = request.files['file']
        if file.filename == '':
            print('no selected file')
            raise InvalidUsage("File not selected", status_code=409)
        if file and allowed_file(file.filename):

            filename = secure_filename(file.filename)
            # to save in the os, change to instead transform and show
            img = cv2.imdecode(np.frombuffer(request.files['file'].read(), np.uint8), cv2.IMREAD_UNCHANGED)
            half = cv2.resize(img, (0, 0), fx=0.1, fy=0.1)
            os.chdir(directory)
            cv2.imwrite(filename, half)
            print('file uploaded')
            return ('file saved')
        else:
            print('some error occurred')
    return render_template('index.html')

class InvalidUsage(Exception):
    status_code: 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response



if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

