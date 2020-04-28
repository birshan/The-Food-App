from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from pathlib import Path
import joblib

from tensorflow import keras

# Loads the extracted features
x_train = joblib.load("x_train.dat")
y_train = joblib.load("y_train.dat")

# Builds a sequential model
model = Sequential()
model.add(Flatten(input_shape=x_train.shape[1:]))
model.add(Dense(512, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(6, activation='softmax'))

# Compiles the model
model.compile(
    loss='categorical_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)

# trains the model
model.fit(
    x_train,
    y_train,
    batch_size=64,
    epochs=10,
    shuffle=True
)

# saves the model structure and weights separately to reduce model size
model_structure = model.to_json()
f = Path("model_structure.json")
f.write_text(model_structure)
model.save_weights("model_weights.h5")

# To save the whole model is needed
# model.save("trained_full_model.h5")

print("Saved model to disk.")
