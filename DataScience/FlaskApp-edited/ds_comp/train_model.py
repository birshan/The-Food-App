from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten, BatchNormalization
from keras.applications import vgg16
from pathlib import Path
import joblib

# Loads the extracted features
x_train = joblib.load("x_train.dat")
y_train = joblib.load("y_train.dat")
x_test = joblib.load("x_test.dat")
y_test = joblib.load("y_test.dat")

# Builds a sequential model
model = Sequential()
feature_extractor = vgg16.VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
x_train = feature_extractor.predict(x_train)
x_test = feature_extractor.predict(x_test)
model.add(Flatten(input_shape=x_train.shape[1:]))
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.5))
model.add(BatchNormalization())
model.add(Dense(256, activation='relu'))
model.add(Dropout(0.5))
model.add(BatchNormalization())
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
    batch_size=32,
    epochs=15,
    validation_data=(x_test, y_test),
    shuffle=True
)

# saves the model structure and weights separately to reduce model size
model_structure = model.to_json()
f = Path("model_structure.json")
f.write_text(model_structure)
model.save_weights("model_weights.h5")

print("Saved model to disk.")
