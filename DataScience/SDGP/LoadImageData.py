import numpy as np
import matplotlib.pyplot as plt
import os
import cv2
import random
import pickle

#sentdex tutorial video https://www.youtube.com/watch?v=j-3vuBynnOE&list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN&index=2

#keep each food category in a different folder inside a folder like 'Food'

DATADIR = "D:\SDGP\DataSets\FOOD101\FOOD101\images" #FOOD101

CATEGORIES = [ "chicken_wings", "pizza", "hot_dog"] #FOOD101
# CATEGORIES = ["Hamburger","Hot_Dog","Pizza"];
DATADIR = "D:\SDGP\DataSets\Food2"#SDGP
CATEGORIES = ["breadsandwich","kottu","noodles","parata","pizza","ricencurry"]


IMG_SIZE = 250

training_data= []

def create_training_data():
    for category in CATEGORIES:
        path = os.path.join(DATADIR, category)
        class_num = CATEGORIES.index(category)
        for img in os.listdir(path):
            try:
                img_array = cv2.imread(os.path.join(path, img), cv2.IMREAD_GRAYSCALE)
                new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
                training_data.append([new_array, class_num])
            except Exception as e:
                pass


create_training_data()

print("Number of images in total: ",len(training_data))


random.shuffle(training_data)
#this is done to avoid the neural net from learning to predict based on which appears the most

x = []
y = []

for features, label in training_data:
    x.append(features)
    y.append(label)

# print(len(x), " ", y[:10])

x = np.array(x).reshape(-1, IMG_SIZE,IMG_SIZE,1)
y = np.array(y)
#-1 is a catch-all for all number of features
# 3 in the end is because the net uses coloured images with RGB values


#Following code will save the model. You dont have to extract the data each time you want to tweak your neural net
pickle_out = open("x.pickle", "wb")
pickle.dump(x, pickle_out)
pickle_out.close()

pickle_out = open("y.pickle", "wb")
pickle.dump(y, pickle_out)
pickle_out.close()



