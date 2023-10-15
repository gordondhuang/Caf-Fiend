import json 

f = open('caffeine_database.json')

data = json.load(f)

for array in data:
    print(array["Drink"])
    print()

f.close()