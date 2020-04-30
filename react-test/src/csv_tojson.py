import csv
import json


with open("players_bio.csv") as f1:
    reader1 = csv.reader(f1)
    with open("gw1.csv") as f2:
        reader2 = csv.reader(f2)
    with open("outputgw1.csv", "w") as g:
        writer = csv.writer(g)
        for row in reader1:
            new_row = [" ".join([row[2], row[3]])] + row[3:4] + row[5:]
            writer.writerow(new_row)

csvfile = open("outputgk.csv", "r")
jsonfile = open("player_gk.json", "w")
fieldnames = ("text", "value", "key")
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)
