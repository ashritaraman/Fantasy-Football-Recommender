import ranked_players
import pandas as pd
import numpy as np
import csv 
from pandas import DataFrame

gw = 35
cost_lim = 1000
ppt = 3 

def extract_cost(team):
    pass

gk_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(1,gw))
def_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(2,gw))
mid_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(3,gw))
fwd_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(4,gw))



def form_team_basic(gw):
    team = [gk_lst[0],gk_lst[1],def_lst[0],def_lst[1],def_lst[2],def_lst[3],def_lst[4],mid_lst[0],mid_lst[1],mid_lst[2],mid_lst[3],mid_lst[4],fwd_lst[0],fwd_lst[1],fwd_lst[2]]
    return team
g = 2
d = 5
m = 5
f = 3
def team_id_gen(team):
    team_id_list = []
    df = pd.read_csv("player_bio.csv", usecols = ['player_id', 'team'])
    df_list = df.values.tolist()
    for elem in df_list:
        if elem[0] in team:
            team_id_list.append(elem)
    return team_id_list

team_list = []
i=1
while i<21:
    team_list.append(0)
    i=i+1

def team_modif_ppt(team):
    df = pd.read_csv("player_bio.csv", usecols = ['player_id', 'team'])
    df_list = df.values.tolist()
    for elem in df_list:
        if elem[0] in team:
            ind = df_list.find(elem)
            team_id = df_list[ind][1]
            team_list[team_id-1] = team_list[team_id-1]+1 
    i=0
    team_id_list = team_id_gen(team)
    while (i<len(team_list)):
        if(team_list[i]>3):
            team_id = i+1
            
        i=i+1
        

def team_modif_cost(team):
    pass


print((form_team_basic(35)))

