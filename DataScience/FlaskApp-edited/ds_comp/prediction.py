import cv2
import os
import numpy as np
from PIL import Image
from tensorflow.keras.models import model_from_json
from pathlib import Path
from tensorflow.keras.preprocessing import image
import numpy as np
from tensorflow.keras.applications import vgg16


class Prediction:
    def __init__(self, filename, file):
        self.file = file
        self.filename = filename

    def make_pred(self):
        class_labels = [
            "bread",
            "rice",
            "roti",
            "noodles",
            "kottu",
            "pizza"
        ]

        # builds the model using the saved structure and weights
        f = Path("ds_comp/model_structure.json")
        model_structure = f.read_text()
        model = model_from_json(model_structure)
        model.load_weights("ds_comp/model_weights.h5")

        # converts the input image to a normalised numpy array
        img = image.load_img(self.file, target_size=(224, 224))
        image_array = image.img_to_array(img)
        images = np.expand_dims(image_array, axis=0)
        images = vgg16.preprocess_input(images)
        # extracts the features of the new image
        feature_extraction_model = vgg16.VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
        features = feature_extraction_model.predict(images)

        # Using the extracted features the model predicts what the image is
        results = model.predict(features)

        # prints the class label of the prediction using results produced
        single_result = results[0]
        most_likely_class_index = int(np.argmax(single_result))
        class_label = class_labels[most_likely_class_index]

        print("{}".format(class_label))
        return "{}".format(class_label)
