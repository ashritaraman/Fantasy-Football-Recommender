import pandas as pd 
from pandas import DataFrame
import numpy 


# for i in range(1,39):
i=1
# csv_name = "gw" +str(i) + ".csv"
# lst = ['name','assists','attempted_passes','big_chances_created',
# 'bps','clean_sheets','clearances_blocks_interceptions','completed_passes',
# 'creativity','dribbles','element','errors_leading_to_goal','goals_conceded',
# 'goals_scored','ict_index','influence','key_passes','penalties_conceded',
# 'penalties_missed','penalties_saved', 'red_cards','round','saves','total_points',
# 'value','winning_goals','yellow_cards']
df = pd.read_csv("gw" +str(i) + ".csv", usecols = ['name','assists','attempted_passes','big_chances_created','bps','clean_sheets','clearances_blocks_interceptions','completed_passes','creativity','dribbles','element','errors_leading_to_goal','goals_conceded','goals_scored','ict_index','influence','key_passes','penalties_conceded','penalties_missed','penalties_saved', 'red_cards','round','saves','total_points','value','winning_goals','yellow_cards'])
df_list = df.values.tolist()

print(df_list)

