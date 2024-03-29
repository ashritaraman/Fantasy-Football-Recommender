# https://www.freecodecamp.org/news/how-to-build-your-first-neural-network-to-predict-house-prices-with-keras-f8db83049159/
# https://machinelearningmastery.com/regression-tutorial-keras-deep-learning-library-python/

import pandas as pd
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense


df = pd.read_csv('weighted_nn_data.csv')

dataset = df.values

X = dataset[:, 0:13]
Y = dataset[:, 13]

min_max_scaler = preprocessing.MinMaxScaler()
X_scale = min_max_scaler.fit_transform(X)

X_train, X_val_and_test, Y_train, Y_val_and_test = train_test_split(X_scale, Y, test_size=0.3)

X_val, X_test, Y_val, Y_test = train_test_split(X_val_and_test, Y_val_and_test, test_size=0.5)

#print(X_train.shape, X_val.shape, X_test.shape, Y_train.shape, Y_val.shape, Y_test.shape)

model = Sequential([    Dense(32, activation='relu', input_shape=(13,)),    Dense(32, activation='relu'),    Dense(1, activation='sigmoid'),])

model.compile(optimizer='sgd', loss='mean_squared_error', metrics=['accuracy'])

hist = model.fit(X_train, Y_train, batch_size=32, epochs=10, validation_data=(X_val, Y_val))

model.evaluate(X_test, Y_test)[1]
hilo = model.predict(X_test)
print(hilo)