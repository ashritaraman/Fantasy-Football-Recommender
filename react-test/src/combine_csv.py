import pandas as pd


def extractId(name_lst):
    id_lst = []
    for name in name_lst:
        name_no_list = name[0]
        indexOfDash = name_no_list.rfind("_")
        pid = name_no_list[indexOfDash + 1 :]
        id_lst.append(pid)
    return id_lst


df_final = pd.read_csv(
    "player_bio_copy.csv", usecols=["Position", "first_name", "second_name", "team"],
)
df_id = pd.read_csv("player_bio_copy.csv", usecols=["id"],)
dfid_list = df_id.values.tolist()
id_list = []
for id in dfid_list:
    id_list.append(str(id[0]))
df_final["id"] = id_list

for i in range(1, 39):
    path_name = "./gws/gw" + str(i) + ".csv"
    df2 = pd.read_csv(path_name, usecols=["team_a_score", "team_h_score"])
    dfName = pd.read_csv(path_name, usecols=["name"])
    dfName_list = dfName.values.tolist()
    id_lst = extractId(dfName_list)
    df2["id"] = id_lst
    df_final = pd.merge(
        left=df_final, right=df2, how="left", left_on="id", right_on="id"
    )
    df_final = df_final.rename(
        columns={
            "team_a_score": "team_a_score_" + str(i),
            "team_h_score": "team_h_score_" + str(i),
        }
    )
df_final.drop_duplicates()
df_final.to_csv("combined_gw.csv")
