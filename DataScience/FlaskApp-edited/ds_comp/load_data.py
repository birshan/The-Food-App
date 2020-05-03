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
images_test = []
labels = []
labels_test = []

train_test_ratio = 0.2

# counts the numbers of images in each category
num_bread_pics = 0
num_rice_pics = 0
num_roti_pics = 0
num_noodles_pics = 0
num_kottu_pics = 0
num_pizza_pics = 0

for img in bread_path.glob("*.png"):
    num_bread_pics += 1

for img in rice_path.glob("*.png"):
    num_rice_pics += 1

for img in roti_path.glob("*.png"):
    num_roti_pics += 1

for img in noodles_path.glob("*.png"):
    num_noodles_pics += 1

for img in kottu_path.glob("*.png"):
    num_kottu_pics += 1

for img in pizza_path.glob("*.png"):
    num_pizza_pics += 1

# Loads the images, converts each to a numpy array and adds the array to the image array variable .
# The expected label of the food category is added to the labels array variable
counter = 0
for img in bread_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_bread_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(0)
    else:
        images.append(image_array)
        labels.append(0)

    counter += 1

counter = 0
for img in rice_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_rice_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(1)
    else:
        images.append(image_array)
        labels.append(1)

    counter += 1

counter = 0
for img in roti_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_roti_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(2)
    else:
        images.append(image_array)
        labels.append(2)

    counter += 1

counter = 0
for img in noodles_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_noodles_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(3)
    else:
        images.append(image_array)
        labels.append(3)

    counter += 1

counter = 0
for img in kottu_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_kottu_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(4)
    else:
        images.append(image_array)
        labels.append(4)

    counter += 1

counter = 0
for img in pizza_path.glob("*.png"):
    img = image.load_img(img, target_size=(224, 224))
    image_array = image.img_to_array(img)

    if counter < (num_pizza_pics * train_test_ratio):
        images_test.append(image_array)
        labels_test.append(5)
    else:
        images.append(image_array)
        labels.append(5)

    counter += 1

# normalises the image data and converts the labels data to a binary matrix
x_train = np.array(images)
x_test = np.array(images_test)
y_train = np.array(labels)
y_test = np.array(labels_test)

# converts to matrices
y_train = keras.utils.to_categorical(y_train, 6)
y_test = keras.utils.to_categorical(y_test, 6)

# normalises the image data
x_train = vgg16.preprocess_input(x_train)
x_test = vgg16.preprocess_input(x_test)

# Saves the extracted features into dat files
joblib.dump(x_train, "x_train.dat")
joblib.dump(y_train, "y_train.dat")
joblib.dump(x_test, "x_test.dat")
joblib.dump(y_test, "y_test.dat")

print("Saved imported data to disk.")
