import pandas as pd

df = pd.concat(map(pd.read_csv, ['weighted_nn_data_1617.csv', 'weighted_nn_data_1617.csv','weighted_nn_data.csv']))

df.to_csv("combined_data.csv")