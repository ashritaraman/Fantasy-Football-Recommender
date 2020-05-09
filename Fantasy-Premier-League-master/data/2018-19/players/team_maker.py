import pandas as pd
import numpy as np 
import csv 
import nn_regression as nn
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import tensorflow as tf

estimator = nn.estimator


gw = 3 # we get this input from the front end 

cols = ['assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','total_points']

def make_def_lst():
    df = pd.read_csv("def.csv")
    df_lst = df.values.tolist()
    def_lst = []
    if gw>5:
      for elem in df_lst:
        try:
            folder_name = elem[2] + "_" + elem[3]+ '_' + str(elem[5])
            player_id = elem[5]
            stats_csv = pd.read_csv("./"+ folder_name + "/"+ "gw.csv", usecols= cols)
            stats_csv_lst = stats_csv.values.tolist()
            idx = gw-1
            temp_lst = []
            prev_points = (stats_csv_lst[idx-1])[10]*0.4 + (stats_csv_lst[idx-2])[10]*0.3 + (stats_csv_lst[idx-3])[10]*0.15 + (stats_csv_lst[idx-4])[10]*0.1 + (stats_csv_lst[idx-5])[10]*0.05
            temp_lst.append(prev_points)
            for i in range(10):
                stat_shit = (stats_csv_lst[idx-1])[i]*0.4 + (stats_csv_lst[idx-2])[i]*0.3 + (stats_csv_lst[idx-3])[i]*0.15 + (stats_csv_lst[idx-4])[i]*0.1 + (stats_csv_lst[idx-5])[i]*0.05
                temp_lst.append(stat_shit)
            temp_lst = [temp_lst]
            temp_lst = pd.DataFrame(temp_lst)
            total_points = estimator.predict(temp_lst)
            def_lst.append([player_id,total_points])
        except:
            pass
        
    if gw<6: #frontend: add form check/text message saying input gw 2 or higher
       for elem in df_lst:
        try:
            folder_name = elem[2] + "_" + elem[3]+ '_' + str(elem[5])
            player_id = elem[5]
            stats_csv = pd.read_csv("./"+ folder_name + "/"+ "gw.csv", usecols= cols)
            stats_csv_lst = stats_csv.values.tolist()
            idx = gw-1
            temp_lst = []
            prev_points = (stats_csv_lst[idx])[10]
            temp_lst.append(prev_points)
            for i in range(10):
                stat_shit = (stats_csv_lst[idx])[i]
                temp_lst.append(stat_shit)
            temp_lst = [temp_lst]
            temp_lst = pd.DataFrame(temp_lst)
            total_points = estimator.predict(temp_lst)
            def_lst.append([player_id,total_points])
        except:
            pass

    return def_lst
            





# def make_mid_lst():
#     mid = pd.read_csv("mid.csv")
#     df_lst = mid.values.tolist()
#     pass

# def make_fwd_lst():
#     fwd = pd.read_csv("fwd.csv")
#     df_lst = fwd.values.tolist()
#     pass

# def make_gk_lst():
#     gk = pd.read_csv("gk.csv")
#     df_lst = gk.values.tolist()
#     pass

def_lst = make_def_lst()
print(def_lst)
# mid_lst = make_mid_lst()
# gk_lst = make_gk_lst()
# fwd_lst = make_fwd_lst()












