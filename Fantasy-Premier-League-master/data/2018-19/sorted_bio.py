import pandas as pd
import numpy as np 
import csv 

df = pd.read_csv("player_bio.csv", usecols = ['Position'])
df_regular = pd.read_csv("player_bio.csv", usecols = ['Position','first_name',
'second_name','team','player_id'])

df_list = df.values.tolist()
df_regular_list = df_regular.values.tolist()


lst_gk = [] 
lst_def = []
lst_mid = [] 
lst_fwd = [] 


length = len(df_list)
i=0 
while i<length:
    if df_list[i][0] == 0: 
        lst_gk.append(df_regular_list[i])
    if df_list[i][0] == 1: 
        lst_def.append(df_regular_list[i])
    if df_list[i][0] == 2: 
        lst_mid.append(df_regular_list[i])
    if df_list[i][0] == 3: 
        lst_fwd.append(df_regular_list[i])
    i=i+1


df_gk = pd.DataFrame(lst_gk, columns = ['Position','first_name','second_name','team','player_id'])
df_gk.to_csv("gk.csv")

df_def= pd.DataFrame(lst_def, columns = ['Position','first_name','second_name','team','player_id'])
df_def.to_csv("def.csv")

df_mid= pd.DataFrame(lst_mid, columns = ['Position','first_name','second_name','team','player_id'])
df_mid.to_csv("mid.csv")

df_fwd= pd.DataFrame(lst_fwd, columns = ['Position','first_name','second_name','team','player_id'])
df_fwd.to_csv("fwd.csv")




