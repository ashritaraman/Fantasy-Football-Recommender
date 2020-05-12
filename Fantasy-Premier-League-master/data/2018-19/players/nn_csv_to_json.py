# import csv
# import json

import pandas as pd
import csv
import json


for i in range(2, 39):
    path_name = str(i) + "nn_team.csv"
    df_goalkeepers = pd.read_csv(path_name, usecols=["goalkeepers"])
    df_defenders = pd.read_csv(path_name, usecols=["defenders"])
    df_midfielders = pd.read_csv(path_name, usecols=["midfielders"])
    df_forwards = pd.read_csv(path_name, usecols=["forwards"])
    df_gameweek = pd.read_csv(path_name, usecols=["gameweek"])
    df_score = pd.read_csv(path_name, usecols=["score"])

    dfGK_str = df_goalkeepers.values.tolist()[1][0]
    dfGK_str = dfGK_str[dfGK_str.index("[") + 1 : dfGK_str.index("]")]
    dfGK_str = dfGK_str.replace("'", "")
    dfGK_lst = dfGK_str.split(", ")

    dfDef_str = df_defenders.values.tolist()[1][0]
    dfDef_str = dfDef_str[dfDef_str.index("[") + 1 : dfDef_str.index("]") - 1]
    dfDef_str = dfDef_str.replace("'", "")
    dfDef_lst = dfDef_str.split(", ")

    dfMid_str = df_midfielders.values.tolist()[1][0]
    dfMid_str = dfMid_str[dfMid_str.index("[") + 1 : dfMid_str.index("]") - 1]
    dfMid_str = dfMid_str.replace("'", "")
    dfMid_lst = dfMid_str.split(", ")

    dfFwd_str = df_forwards.values.tolist()[1][0]
    dfFwd_str = dfFwd_str[dfFwd_str.index("[") + 1 : dfFwd_str.index("]") - 1]
    dfFwd_str = dfFwd_str.replace("'", "")
    dfFwd_lst = dfFwd_str.split(", ")

    df_final = pd.DataFrame(
        columns=[
            "goalkeeper1",
            "goalkeeper2",
            "defender1",
            "defender2",
            "defender3",
            "defender4",
            "defender5",
            "midfielder1",
            "midfielder2",
            "midfielder3",
            "midfielder4",
            "midfielder5",
            "forward1",
            "forward2",
            "forward3",
            "gameweek",
            "score",
        ]
    )
    print(dfGK_lst[0])
    df_final["goalkeeper1"] = [dfGK_lst[0]]
    df_final["goalkeeper2"] = [dfGK_lst[1]]
    df_final["defender1"] = [dfDef_lst[0]]
    df_final["defender2"] = [dfDef_lst[1]]
    df_final["defender3"] = [dfDef_lst[2]]
    df_final["defender4"] = [dfDef_lst[3]]
    df_final["defender5"] = [dfDef_lst[4]]
    df_final["midfielder1"] = [dfMid_lst[0]]
    df_final["midfielder2"] = [dfMid_lst[1]]
    df_final["midfielder3"] = [dfMid_lst[2]]
    df_final["midfielder4"] = [dfMid_lst[3]]
    df_final["midfielder5"] = [dfMid_lst[4]]
    df_final["forward1"] = [dfFwd_lst[0]]
    df_final["forward2"] = [dfFwd_lst[1]]
    df_final["forward3"] = [dfFwd_lst[2]]
    df_final["gameweek"] = df_gameweek.values.tolist()[1]
    df_final["score"] = df_score.values.tolist()[1]
    df_final.to_csv(str(i) + "_team.csv")

    with open((str(i) + "_team.csv"), "r") as f1:
        reader1 = csv.reader(f1)
        with open(str(i) + "_team_output.csv", "w") as g:
            writer = csv.writer(g)
            for j, row in enumerate(reader1):
                if j != 0:
                    new_row = row[1:]
                    writer.writerow(new_row)

    csvfile = open(str(i) + "_team_output.csv", "r")
    jsonfile = open(str(i) + "_team.json", "w")
    fieldnames = (
        "goalkeeper1",
        "goalkeeper2",
        "defender1",
        "defender2",
        "defender3",
        "defender4",
        "defender5",
        "midfielder1",
        "midfielder2",
        "midfielder3",
        "midfielder4",
        "midfielder5",
        "forward1",
        "forward2",
        "forward3",
        "gameweek",
        "score",
    )
    reader = csv.DictReader(csvfile, fieldnames)
    out = json.dumps([row for row in reader])
    jsonfile.write(out)

# df_final.to_csv("combined_gw_3.csv")
