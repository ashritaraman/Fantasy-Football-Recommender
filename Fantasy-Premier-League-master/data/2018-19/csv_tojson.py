import csv
import json


with open("player_idlist.csv") as f:
    reader = csv.reader(f)
    with open("output.csv", "w") as g:
        writer = csv.writer(g)
        for row in reader:
            new_row = [" ".join([row[0], row[1]])] + row[1:2] + row[2:]
            writer.writerow(new_row)

csvfile = open("output.csv", "r")
jsonfile = open("players.json", "w")

fieldnames = ("text", "value", "key")
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)

