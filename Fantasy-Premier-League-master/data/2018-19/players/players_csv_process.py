import pandas as pd
import numpy as np 
import csv 



gw = 6

player_bio_df = pd.read_csv("player_bio.csv", usecols= ['Position','first_name','second_name','player_id'])
player_bio_df_list = player_bio_df.values.tolist()

df_list = [] 

weightages = [0.4,0.3,0.15,0.1,0.05]

def remove_rows(gw_df_list):
    rounds_lst = []
    for i in range(1,39):
        rounds_lst.append(i)
    for row in gw_df_list:
        if row[10] in rounds_lst:
            pass
        else:
            gw_df_list.remove(row)
    return gw_df_list

def order_rows(gw_df_list):
    i = 1
    for elem in gw_df_list:
        elem[10] = i
        i = i+1
    return gw_df_list

def make_big_csv(gw):
    for elem in player_bio_df_list:
        folder_name = "" + elem[1] + "_" + elem[2] + "_" + str(elem[3])
        player_pos = elem[0]
        file_path = './'+ folder_name + '/'
        item = "gw.csv"
        gw_df = pd.read_csv(file_path + item, usecols= ['assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','round','total_points'])
        gw_df_list = gw_df.values.tolist()

        gw_df_list = remove_rows(gw_df_list)
        gw_df_list = order_rows(gw_df_list)

        game_week = gw
        while game_week<len(gw_df_list):  
            lst_1 = [] 
            lst_2 = []
            lst_3 = []
            lst_4 = []
            lst_5 = [] 
            for row in gw_df_list:
                #row[10] = round
                if row[10] == game_week:
                    final_total_points = row[11]
                if row[10] == game_week-5:
                    lst_5 = row
                if row[10] == game_week-4:
                    lst_4 = row
                if row[10] == game_week-3:
                    lst_3 = row
                if row[10] == game_week-2:
                    lst_2 = row
                if row[10] == game_week-1:
                    lst_1 = row

            temp_lst = [] 
            temp_lst.append(final_total_points)
            temp_lst.append(game_week)
            i = 0
            while i<len(lst_1): #all list sizes should be the same--12
                big_row = lst_1[i]*0.4 + lst_2[i]*0.3 + lst_3[i]*0.15 + lst_4[i]*0.1 + lst_5[i]*0.05
                temp_lst.append(big_row)
                i=i+1

            temp_lst.append(player_pos)    
            temp_lst.append(str(elem[3]))
            df_list.append(temp_lst)
            
            
            game_week = game_week+1
    return df_list


cols = ['total_points_prev', 'current_gw', 'assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','round','total_points','position_number','player_id']
df_list = make_big_csv(6)

df_fwd= pd.DataFrame(df_list, columns = cols)
df_fwd.to_csv("weighted_nn_data.csv")

