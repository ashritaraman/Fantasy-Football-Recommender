import pandas as pd
import numpy as np
import restrictions as rs
# import ranked_players as rp


# Reversing a string
def rev_str(s):
    strg_temp = ''
    for i in s:
        strg_temp = i+strg_temp
    return strg_temp


# Parsing the player_ids from the given format in the data
def name_parse(nm):
    nm = rev_str(nm)
    i = nm.find('_')
    id = nm[:i]
    id = rev_str(id)
    try:
        return (int(id))
    except:
        print("Id not available")

def evaluate_team_score(team, gw):
    csv_name = "gw"+str(gw)+".csv"
    df = pd.read_csv(csv_name, usecols = ['name','total_points'], encoding = "cp1252")
    df_list = df.values.tolist()
    score = 0
    for elem in df_list:
        for player_id in team:
            if name_parse(elem[0]) == player_id:
                score = score + elem[1]
    return score

team = rs.team 
gw = rs.gw 
print(team)
cost = evaluate_team_score(team,gw)
print(cost)

