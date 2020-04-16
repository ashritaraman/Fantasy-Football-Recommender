import ranked_players
import pandas as pd
import numpy as np
import csv 
from pandas import DataFrame

gw = 35
cost_lim = 1000
ppt = 3 
g = 2
d = 5
m = 5
f = 3

# def extract_cost(team):
#     pass

gk_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(1,gw))
def_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(2,gw))
mid_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(3,gw))
fwd_lst = ranked_players.delete_dups(ranked_players.pos_ranked_players(4,gw))



def form_team_basic(gw):
    team = [gk_lst[0],gk_lst[1],def_lst[0],def_lst[1],def_lst[2],def_lst[3],def_lst[4],mid_lst[0],mid_lst[1],mid_lst[2],mid_lst[3],mid_lst[4],fwd_lst[0],fwd_lst[1],fwd_lst[2]]
    return team


def team_id_gen(team):
    team_id_list = []
    df = pd.read_csv("player_bio.csv", usecols = ['player_id', 'team'])
    df_list = df.values.tolist()
    for elem in df_list:
        for elem2 in team:
            if elem[1] == elem2:
                team_id_list.append(elem)
    return team_id_list


def team_modif_ppt(team,g,d,m,f):
    # Initialize team_list with a list with 20 zeroes
    team_list = []
    i=1
    while i<21:
        team_list.append(0)
        i=i+1
    df = pd.read_csv("player_bio.csv", usecols = ['team', 'player_id'])
    df_list = df.values.tolist()
    for elem in df_list:
        if elem[1] in team:
            ind = df_list.index(elem)
            team_id = df_list[ind][0]
            team_list[team_id-1] = team_list[team_id-1]+1 
    # print(team_list)
    team_id_list = team_id_gen(team)

    i=0
    while (i<len(team_list)):
        if(team_list[i]>3):
            team_id = i+1
            for tup in team_id_list:
                if tup[0] == team_id:
                    player_id = tup[1]
                    if player_id in gk_lst:
                        team.remove(player_id)
                        team_id_list.remove([team_id,player_id])
                        team.append(gk_lst[g])
                        team_list[team_id-1] = team_list[team_id-1]-1
                        for grp in df_list:
                            if grp[1] == gk_lst[g]:
                                t_id = grp[0]
                                team_id_list.append([t_id,gk_lst[g]])
                                team_list[t_id-1] = team_list[t_id-1]+1         
                        g=g+1
                    elif player_id in def_lst:
                        team.remove(player_id)
                        team_id_list.remove([team_id,player_id])
                        team.append(def_lst[d])
                        team_list[team_id-1] = team_list[team_id-1]-1
                        for grp in df_list:
                            if grp[1] == def_lst[d]:
                                t_id = grp[0]
                                team_id_list.append([t_id,def_lst[d]])
                                team_list[t_id-1] = team_list[t_id-1]+1
                        d=d+1
                    elif player_id in mid_lst:
                        team.remove(player_id)
                        team_id_list.remove([team_id,player_id])
                        team.append(mid_lst[m])
                        team_list[team_id-1] = team_list[team_id-1]-1
                        for grp in df_list:
                            if grp[1] == mid_lst[m]:
                                t_id = grp[0]
                                team_id_list.append([t_id,mid_lst[m]])
                                team_list[t_id-1] = team_list[t_id-1]+1
                        m=m+1
                    elif player_id in fwd_lst:
                        team.remove(player_id)
                        team_id_list.remove([team_id,player_id])
                        team.append(fwd_lst[f])
                        team_list[team_id-1] = team_list[team_id-1]-1
                        for grp in df_list:
                            if grp[1] == fwd_lst[f]:
                                t_id = grp[0]
                                team_id_list.append([t_id,fwd_lst[f]])
                                team_list[t_id-1] = team_list[t_id-1]+1
                        f=f+1
        i=i+1

    # print(team_list)
    # print(g)       
    # print(team)
    # print(team_list)
    return ([team,team_list,[g,d,m,f]])
  

def team_modif_ppt_rec(team,team_list,g,d,m,f):
    i=0
    print(team_list)
    while(i<len(team_list)):
        if (team_list[i]>3):
            [team,team_list,[g,d,m,f]] = team_modif_ppt(team,team_list,g,d,m,f)
            i=0
        else:
            i=i+1

    return team


team1 = form_team_basic(35)
# print(team1)
team1 = team_modif_ppt(team1,g,d,m,f)
team2 = team_modif_ppt_rec(team1[0],team1[1],g,d,m,f)
print(team2)
