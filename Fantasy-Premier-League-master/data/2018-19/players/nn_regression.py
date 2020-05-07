# https://www.freecodecamp.org/news/how-to-build-your-first-neural-network-to-predict-house-prices-with-keras-f8db83049159/
# https://machinelearningmastery.com/regression-tutorial-keras-deep-learning-library-python/

import pandas as pd
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline


# load dataset
dataframe = pd.read_csv("weighted_nn_data_train.csv")
dataset = dataframe.values
# split into input (X) and output (Y) variables
X = dataset[:,1:14]
Y = dataset[:,14]

print(X[0])
print(Y[0])


# define base model
def baseline_model():
	# create model
	model = Sequential()
	model.add(Dense(13, input_dim=13, kernel_initializer='normal', activation='relu'))
	model.add(Dense(1, kernel_initializer='normal'))
	# Compile model
	model.compile(loss='mean_squared_error', optimizer='adam')
	return model

# evaluate model
estimator = KerasRegressor(build_fn=baseline_model, epochs=100, batch_size=5, verbose=0)
# kfold = KFold(n_splits=10)
# results = cross_val_score(estimator, X, Y, cv=kfold)
# print("Baseline: %.2f (%.2f) MSE" % (results.mean(), results.std()))
estimator.fit(X,Y)

dataframe2 = pd.read_csv("weighted_nn_data_test_1819.csv")
dataset2 = dataframe2.values
# split into input (X) and output (Y) variables
X_Pred = dataset2[:,1:14]
Y_pred = dataset2[:,14]
prediction = estimator.predict(X_Pred)
# print(prediction)

df_list = [] 

for elem in prediction:
    df_list.append([elem])
# print(df_list)
df_fwd= pd.DataFrame(df_list, columns = ['prediction'])
df_fwd.to_csv("prediction.csv")

