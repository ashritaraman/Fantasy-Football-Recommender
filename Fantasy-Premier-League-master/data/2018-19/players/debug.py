import pandas as pd
import numpy as np
import csv 

cols = ['assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','total_points']

df = pd.read_csv("def.csv")
df_lst = df.values.tolist()

elem = df_lst[0]
folder_name = elem[2] + "_" + elem[3]+ '_' + str(elem[5])
player_id = elem[5]
stats_csv = pd.read_csv("./"+ folder_name + "/"+ "gw.csv", usecols= cols)
stats_csv_lst = stats_csv.values.tolist()

print(len(stats_csv_lst[0]))
# print(folder_name)