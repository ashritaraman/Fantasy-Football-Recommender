import csv
import json

with open("2_team.csv", "r") as f1:
    reader1 = csv.reader(f1)
    with open("2_team_output.csv", "w") as g:
        writer = csv.writer(g)
        for i, row in enumerate(reader1):
            if i != 0:
                new_row = row[1:]
                writer.writerow(new_row)

csvfile = open("2_team_output.csv", "r")
jsonfile = open("2_team.json", "w")
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
