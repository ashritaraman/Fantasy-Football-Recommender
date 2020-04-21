import csv
import json


with open("player_bio.csv") as f:
    reader = csv.reader(f)
    with open("output.csv", "w") as g:
        writer = csv.writer(g)
        for row in reader:
            new_row = row[1:2] + [" ".join([row[2], row[3]])] + row[4:5]
            writer.writerow(new_row)

csvfile = open("output.csv", "r")
jsonfile = open("players_bio.json", "w")

fieldnames = ("Position", "name", "team")
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)
