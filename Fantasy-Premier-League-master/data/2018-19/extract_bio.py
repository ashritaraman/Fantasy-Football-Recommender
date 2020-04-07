import pandas as pd
import csv 
import numpy as np
from pandas import DataFrame
"""
From players_raw, we need to extract player frist_name, second_name, team. 2018-19 season, 

"""
 
df = pd.read_csv("players_raw.csv", usecols = ['first_name','second_name','team'])

df1 = pd.read_csv("player_idlist.csv", usecols = ['id'])

df_list = df.values.tolist()
df1_list = df1.values.tolist()

lst = []
for elem1 in df1_list: 
    lst.append(elem1[0])
for i in range(len(lst)):
    df_list[i].append(lst[i])
print(df_list)

df_2 = pd.DataFrame(df_list, columns = ['first_name','second_name','team','player_id'])
df_2.to_csv("player_bio.csv")





"""
with open('players_raw.csv') as csv_file:
    player_list = [] 
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
            lst_temp = []
            first_name = str(row[18])
            second_name = str(row[41])
            team = int(row[46])
            print(team)
            lst_temp.add(first_name,second_name)
    player_list.add(lst_temp)



"""