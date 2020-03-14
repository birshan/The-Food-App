import pickle
import time
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import Dense, Activation, Flatten, Conv2D, MaxPooling2D
from tensorflow.keras.models import Sequential
# from keras.models import Sequential
# from keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D

dense_layers = [0]
layer_sizes = [64]
conv_layers = [3]


x = pickle.load(open("x.pickle", "rb"))
y = pickle.load(open("y.pickle", "rb"))

y = np.array(y)
x = x / 255.0

for dense_layer in dense_layers:
    for layer_size in layer_sizes:
        for conv_layer in conv_layers:
            NAME = "{}-conv---{}-nodes---{}-dense-{}".format(conv_layer, layer_size, dense_layer, int(time.time()))

            model = Sequential()

            model.add(Conv2D(layer_size, (3, 3), input_shape=x.shape[1:]))
            model.add(Activation("relu"))
            model.add(MaxPooling2D(pool_size=(2, 2)))

            for l in range(conv_layer - 1):
                model.add(Conv2D(layer_size, (3, 3)))
                model.add(Activation("relu"))
                model.add(MaxPooling2D(pool_size=(2, 2)))

            model.add(Flatten())

            for l in range(dense_layer):
                model.add(Dense(layer_size))
                model.add(Activation('relu'))

            # model.add(Dense(1)) for binary classification you only need one neuron for the last layer which will fire 0 or 1
            # model.add(Activation('sigmoid'))
            model.add(tf.keras.layers.Dense(6, activation=tf.nn.softmax))#last layer needs 1 neuron for each category, (last layer gives the answer)
#  --  why use softmax instead of sigmoid - https://towardsdatascience.com/deep-learning-which-loss-and-activation-functions-should-i-use-ac02f1c56aa8
            model.compile(loss='sparse_categorical_crossentropy',
                          optimizer='adam',
                          metrics=['accuracy'])
#  -- changed form binary_crossentropy to categorical crossentropy, its a loss function we can use for more than 2 categories.
            model.fit(x, y, batch_size=10, epochs=10, validation_split=0.1, callbacks=[
                tf.keras.callbacks.TensorBoard(log_dir='logs\\{}'.format(NAME),
                                               histogram_freq=1, profile_batch=100000000)])
#  -- Use lower batch sizes if you have lower amount of data



model.save('FoodApp_CNN.model') # saves the model to be used from cloud