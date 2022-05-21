from fastapi import FastAPI,Body
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from webbrowser import open as openbws
from DataModule import OneData,MultiData
import uvicorn
from pydantic import BaseModel
from typing import List
from configparser import ConfigParser

config = ConfigParser()
config.read('./cfg.config')
htmlpath = config.get('path','htmlpath')

oneLib = OneData()
multiLib = MultiData()

app = FastAPI()
app.mount("/css", StaticFiles(directory=f"{htmlpath}/css"), name="css")
app.mount("/js", StaticFiles(directory=f"{htmlpath}/js"), name="js")
app.mount("/img", StaticFiles(directory=f"{htmlpath}/img"), name="img")
app.mount("/fonts", StaticFiles(directory=f"{htmlpath}/fonts"), name="fonts")


class Person(BaseModel):
    name: str
    age: int
    money: int



@app.get("/one")
async def onee(name:str,age:int,money:int):
    print(f"Client [{name}] request")
    return oneLib.run(money, age, name)

@app.post("/multi")
async def multii(person_list:List[Person] = Body(...,embed=True),years:int = Body(...,embed=True)):
    print(f"Client [{person_list}] request")
    
    money = 0
    people_num = len(person_list)
    year = years
    age_list = []
    name_list = []

    for person in person_list:
        money += person.money
        age_list.append(person.age)
        name_list.append(person.name)
    res = multiLib.run_data(money, people_num, age_list, year, name_list)
    return res


@app.get("/index",response_class=HTMLResponse)
async def index():
    with open(f"{htmlpath}/index.html",'r') as f:
        return f.read()

if __name__ == '__main__':
    openbws('http://localhost:8000/index')
    uvicorn.run(app, host="127.0.0.1", port=8000)

