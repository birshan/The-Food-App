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
            #to save in the os, change to instead transform and show
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('upload_image',
                                    filename=filename))
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
