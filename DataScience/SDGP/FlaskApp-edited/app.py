from flask import Flask, render_template, request, redirect, flash, url_for
from werkzeug.utils import secure_filename
from ds_comp.prediction import *


UPLOAD_FOLDER = '/home/avishka/PycharmProjects/ImageRecog/Recognition between mltiple categories/pics'
ALLOWED_EXTENTIONS = {'jpeg', 'jpg', 'png'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
directory = '/home/avishka/PycharmProjects/ImageRecog/Recognition between mltiple categories/pics'


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

            obj = Prediction(filename, file)
            # prediction = obj.make_pred()
            # if rice is predicted:
            prediction = 'rice'

            return render_template('index.html', filename=filename, file=file, prediction=prediction)

    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
