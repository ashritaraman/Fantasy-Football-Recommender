import pandas as pd 
import csv      
import numpy as np
import restrictions as rp
import random 
import eval

gk_lst = rp.gk_lst
def_lst = rp.def_lst 
mid_lst = rp.mid_lst 
fwd_lst = rp.fwd_lst



def random_team_score_calculator():
    cost = 0
    for i in range(100):
        g1 = random.randint(0,len(gk_lst)-1)
        g2 = random.randint(0,len(gk_lst)-1)
        while (g2!=g1):
            g2 = random.randint(0,len(gk_lst)-1)
        
        d1 = random.randint(0,len(def_lst)-1)
        d2 = random.randint(0,len(def_lst)-1)
        while d2!=d1:
            d2 = random.randint(0,len(def_lst)-1)
        d3 = random.randint(0,len(def_lst)-1)
        while d3!=d1 and d3!=d2:
            d3 = random.randint(0,len(def_lst)-1)
        d4 = random.randint(0,len(def_lst)-1)
        while d4!=d3 and d4!=d2 and d4!= d1:
            d4 =random.randint(0,len(def_lst)-1)
        d5 = random.randint(0,len(def_lst)-1)
        while d5!=d4 and d5!=d3 and d5 != d2 and d5!=d1:
            d5 = random.randint(0,len(def_lst)-1)

        m1 = random.randint(0,len(mid_lst)-1)
        m2 = random.randint(0,len(mid_lst)-1)
        while m2!=m1:
            m2 = random.randint(0,len(mid_lst)-1)
        m3 = random.randint(0,len(mid_lst)-1)
        while m3!=m1 and m3!=m2:
            m3 = random.randint(0,len(mid_lst)-1)
        m4 = random.randint(0,len(mid_lst)-1)
        while m4!=m3 and m4!=m2 and m4!= m1:
            m4 =random.randint(0,len(mid_lst)-1)
        m5 = random.randint(0,len(mid_lst)-1)
        while m5!=m4 and m5!=m3 and m5 != m2 and m5!=m1:
            m5 = random.randint(0,len(mid_lst)-1)
        
        f1 = random.randint(0,len(fwd_lst)-1)
        f2 = random.randint(0,len(fwd_lst)-1)
        while f2!=f1:
            f2 = random.randint(0,len(fwd_lst)-1)
        f3 = random.randint(0,len(fwd_lst)-1)
        while f3!=f1 and f3!=f2:
            f3 = random.randint(0,len(fwd_lst)-1)

        team = [gk_lst[g1],gk_lst[g2],def_lst[d1],def_lst[d2],def_lst[d3],def_lst[d4],def_lst[d5],mid_lst[m5],mid_lst[m1],mid_lst[m2],mid_lst[m3],mid_lst[m4],fwd_lst[f3],fwd_lst[f1],fwd_lst[f2]]
        cost = cost + eval.evaluate_team_score(team,35)
        
    return cost/100


print(random_team_score_calculator())