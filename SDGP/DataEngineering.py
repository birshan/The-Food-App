import numpy as np
import matplotlib.pyplot as plt
import os
import cv2

#sentdex tutorial video https://www.youtube.com/watch?v=j-3vuBynnOE&list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN&index=2

#keep each food category in a different folder inside a folder like 'Food'
DATADIR = "D:\SDGP\DataSets\Food" #paste url path to images

CATEGORIES = ["Chicken", "Dhal", "Kothu", "Rice"] #fill with names of all food image folders



IMG_SIZE = 250

training_data= []

def create_training_data():
    for category in CATEGORIES:
        path = os.path.join(DATADIR, category)  # Gives specific path to each category
        class_num = CATEGORIES.index(category)# 0 = chicken, 1=dhal, 2=kothu, 3=rice etc
        for img in os.listdir(path):
            img_array = cv2.imread(os.path.join(path, img), cv2.IMREAD_COLOR)  # we choose to keep the colour data eventhough it makes the size 3 times larger because its important info when determining the difference between potato/chicken/rice etc
            new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
            training_data.append([new_array, class_num]) #Labels the data with the category index



create_training_data()

print("Number of images in total: " + len(training_data))

import random
random.shuffle(training_data)
#this is done to avoid the neural net from learning to predict based on which appears the most

x = []
y = []

for features, label in training_data:
    x.append(features)
    y.append(label)

x = np.array(x).reshape(-1, IMG_SIZE,IMG_SIZE,3)
#-1 is a catch-all for all number of features
# 3 in the end is because the net uses coloured images with RGB values
import pickle

#Following code will save the model. You dont have to extract the data each time you want to tweak your neural net
pickle_out = open("x.pickle", "wb")
pickle.dump(x, pickle_out)
pickle_out.close()

#Following code loads the data... use it to load it into other python files in the same project folder.
#pickle_in = open("x.pickle", "rb")
# x = pickle.load(pickle_in)

