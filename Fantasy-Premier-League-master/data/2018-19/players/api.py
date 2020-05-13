from flask import Flask
import restrictions
import json 
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/gw/<gw>')
def get_team(gw):
    gw = int(gw)
    print("inside fin get team")
    team, team_list, pos_lists = restrictions.get_team(gw)
    return json.dumps(team)
       

if __name__ == '__main__':
    app.run(debug=True)