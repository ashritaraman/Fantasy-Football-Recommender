import pandas as pd
import numpy as np
import csv 
from pandas import DataFrame


def name_parse(nm):
    pass


"""
Take the gameweek, as an input and output a ranked list for 
each position
"""
def rank_players(gw):

    if gw==1: 
        pass
    elif gw==2:
        pass
    elif gw==3: 
        pass
    else:
        csv_names = [ "gw"+str(gw-1)+".csv","gw"+str(gw-2)+".csv","gw"+str(gw-2)+".csv"]
        for name in csv_names:
            df = pd.read_csv(name, usecols = ['name','ict_index'], encoding = "cp1252")
            df_list = df.values.tolist()
            
    
    
    

    
    pass