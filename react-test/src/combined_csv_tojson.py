import csv
import json


with open("combined_gw.csv") as f1:
    reader1 = csv.reader(f1)
    with open("outputcombined.csv", "w") as g:
        writer = csv.writer(g)
        for i, row in enumerate(reader1):
            if i > 0:
                new_row = row[1:2] + [" ".join([row[2], row[3]])] + row[4:5] + row[6:]
                writer.writerow(new_row)

csvfile = open("outputcombined.csv", "r")
jsonfile = open("combined_gw.json", "w")
team_a_str = "team_a_score_"
team_h_str = "team_h_score_"
fieldnames_lst = ["position", "name", "team"]
for i in range(1, 39):
    fieldnames_lst.append(team_a_str + str(i))
    fieldnames_lst.append(team_h_str + str(i))
fieldnames = tuple(fieldnames_lst)
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)