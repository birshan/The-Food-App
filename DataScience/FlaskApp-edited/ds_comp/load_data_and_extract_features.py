from pathlib import Path
import numpy as np
import joblib
from keras.preprocessing import image
from keras.applications import vgg16

from tensorflow import keras

# paths to training data
bread_path = Path("training_data") / "bread"
rice_path = Path("training_data") / "rice"
roti_path = Path("training_data") / "roti"
noodles_path = Path("training_data") / "noodles"
kottu_path = Path("training_data") / "kottu"
pizza_path = Path("training_data") / "pizza"

# The categories of food to classify
categories = {
    0: "bread",
    1: "rice",
    2: "roti",
    3: "noodles",
    4: "kottu",
    5: "pizza",
}

images = []
labels = []

# Loads the images, converts each to a numpy array and adds the expected label as the 4th dimension
for img in bread_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(0)

for img in rice_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(1)

for img in roti_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(2)

for img in noodles_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(3)

for img in kottu_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(4)

for img in pizza_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)
    images.append(image_array)
    labels.append(5)

# normalises the image data and extracts the features of images
x_train = np.array(images)
y_train = np.array(labels)
y_train = keras.utils.to_categorical(y_train, 6)
x_train = vgg16.preprocess_input(x_train)
feature_extr = vgg16.VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
features_x = feature_extr.predict(x_train)

# Saves the extracted features into dat files
joblib.dump(features_x, "x_train.dat")
joblib.dump(y_train, "y_train.dat")
