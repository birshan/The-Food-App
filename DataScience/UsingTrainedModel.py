import cv2
import tensorflow as tf

CATEGORIES = ["Hamburger","Hot_Dog","Pizza"]


def prepare(filepath):
    IMG_SIZE = 250
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    img_array = img_array/255.0

    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)


# model = tf.keras.models.load_model('FoodApp_CNN.model')

# prediction = model.predict([prepare('pict.jpg')])
# print(CATEGORIES[int(prediction[0][0])])