import pickle
import time
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import Dense, Activation, Flatten, Conv2D, MaxPooling2D
from tensorflow.keras.models import Sequential

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

            model.add(Dense(1))
            model.add(Activation('sigmoid'))

            model.compile(loss='binary_crossentropy',
                          optimizer='adam',
                          metrics=['accuracy'])

            model.fit(x, y, batch_size=32, epochs=10, validation_split=0.1, callbacks=[
                tf.keras.callbacks.TensorBoard(log_dir='logs\\{}'.format(NAME),
                                               histogram_freq=1, profile_batch=100000000)])


model.save('FoodApp_CNN.model') # saves the model to be used from cloud