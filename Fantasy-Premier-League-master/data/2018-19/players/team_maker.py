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


gw = 35 # we get this input from the front end 

cols = ['assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','total_points']

def make_def_lst(position_num):
    if position_num == 1:
        csv_name = "gk.csv"
    if position_num == 2:
        csv_name = "def.csv"
    if position_num == 3: 
        csv_name = "mid.csv"
    if position_num == 4: 
        csv_name = "fwd.csv"
    df = pd.read_csv(csv_name)
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
            total_points = total_points.tolist()
            total_points = total_points[0]
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
            total_points = total_points.tolist()
            total_points = total_points[0]
            def_lst.append([player_id,total_points])
        except:
            pass

    return def_lst


# Sort a given list in descending order
def sort_list (lst):
    lst.sort(reverse = True)
    return lst

def sort_lst_of_lsts(lst):
    n = len(lst)
    seconds_lst = []
    firsts_lst = []
    sorted_list = []
    for elem in lst:
        seconds_lst.append(elem[1])
        firsts_lst.append(elem[0])
    seconds_lst = sort_list(seconds_lst)
    for elem_points in seconds_lst:
        for elem in lst:
            if elem_points == elem[1]:
                if elem[0] in firsts_lst:
                    sorted_list.append(elem)
                    firsts_lst.remove(elem[0])

    return sorted_list

def_lst = make_def_lst(2)

def_lst = sort_lst_of_lsts(def_lst)

# def_lst = make_def_lst(2)
def_lst2 = sorted(def_lst, key=lambda x: x[1], reverse=True)
print(def_lst == def_lst2)

mid_lst = make_def_lst(3)
mid_lst = sort_lst_of_lsts(mid_lst)

gk_lst = make_def_lst(1)
gk_lst = sort_lst_of_lsts(gk_lst)

fwd_lst = make_def_lst(4)
fwd_lst = sort_lst_of_lsts(fwd_lst)

# print(def_lst)
# print(mid_lst)
# print(fwd_lst)
# print(gk_lst)









