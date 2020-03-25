from flask import Flask, render_template, request, redirect, flash, url_for
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


@app.route('/upload_image/', methods=['POST', 'GET'])
def upload_image():
    if request.method == 'POST':
        # checking for file
        if 'file' not in request.files:
            print('no file')
            return redirect('/')
        file = request.files['file']
        if file.filename == '':
            print('no selected file')
            return redirect('/')
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # to save in the os, change to instead transform and show
            img = cv2.imdecode(np.frombuffer(request.files['file'].read(), np.uint8), cv2.IMREAD_UNCHANGED)
            half = cv2.resize(img, (0, 0), fx=0.1, fy=0.1)
            os.chdir(directory)
            cv2.imwrite(filename, half)
            return render_template('index.html', filename=filename, file=file)
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
