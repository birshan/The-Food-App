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
            "noodles"
        ]

        f = Path("model_structure.json")
        model_structure = f.read_text()

        model = model_from_json(model_structure)

        model.load_weights("model_weights.h5")

        img = image.load_img(self.file, target_size=(224, 224))

        image_array = image.img_to_array(img)

        images = np.expand_dims(image_array, axis=0)

        images = vgg16.preprocess_input(images)

        feature_extraction_model = vgg16.VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
        features = feature_extraction_model.predict(images)

        results = model.predict(features)

        print(results[0])

        single_result = results[0]

        most_likely_class_index = int(np.argmax(single_result))
        class_likelihood = single_result[most_likely_class_index]

        class_label = class_labels[most_likely_class_index]

        print("This is image is a {} - Likelihood: {:2f}".format(class_label, class_likelihood))
        return "{}".format(class_label)
