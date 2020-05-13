import pandas as pd
import numpy as np
import restrictions as rs
import ranked_players 

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

# Main evaluation punction
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


def team_to_csv(team, pos_lists):
    gk_lst, def_lst, mid_lst, fwd_lst = pos_lists
    lst1 = [] 
    lst2 = []
    lst3 = [] 
    lst4 = []
    for elem in team:
        if elem in gk_lst:
            lst1.append(elem)
        if elem in def_lst:
            lst2.append(elem)
        if elem in mid_lst:
            lst3.append(elem)
        if elem in fwd_lst:
            lst4.append(elem)
    final_lst = []
    final_lst.append(lst1)
    final_lst.append(lst2)
    final_lst.append(lst3)
    final_lst.append(lst4)
    final_lst.append(gw)
    final_lst.append(score)
    return final_lst

for gw in range(2, 39):
    print("Building team for GameWeek: {}".format(str(gw)))
    team, team_list, pos_lists = rs.get_team(gw)
    

    # print(ranked_players.player_name_gen(team))

    score = evaluate_team_score(team,gw)
    cost = rs.calculate_cost(team,gw)



    final_lst = team_to_csv(team, pos_lists)
    print("Cost: %s" % cost)
    print("Score: %d" % score)
    print("Team List: ", team_list)
    print("Final List: ", final_lst)

    
    name_list = []
    i=0
    while i<4:
        temp_lst = final_lst[i]
        temp_lst = ranked_players.player_name_gen(temp_lst)
        name_list.append(temp_lst)
        i=i+1

    name_list.append(gw)
    name_list.append(score)

    df_fwd= pd.DataFrame([final_lst,name_list], columns = ['goalkeepers','defenders','midfielders','forwards','gameweek','score'])
    df_fwd.to_csv(str(gw)+'nn_team'+".csv")
