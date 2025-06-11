from fastapi import FastAPI
from model import User, Chore
from typing import List

app = FastAPI()


data = {
    "site1": {
        "chores": {
            "chore1": Chore(name="Dusting", frequency="weekly"),
            "chore2": Chore(name="Vacuuming", frequency="bi-weekly"),
            "chore3": Chore(name="Mopping", frequency="monthly")
        },
        "users": {
            "user1": User(username="julia"),
            "user2": User(username="gerald")
        }
    }
}

@app.get("/{site_name}/chores")
async def get_chores(site_name: str) -> List[Chore]:
    if site_name in data:
        return data[site_name]["chores"]
    else:
        return {"error": "Site not found"}
    
@app.get("/{site_name}/chores/{chore_name}")
async def get_chore(site_name: str, chore_name: str) -> Chore:
    if site_name in data and chore_name in data[site_name]["chores"]:
        return data[site_name]["chores"][chore_name]
    else:
        return {"error": "Chore not found"}
    
@app.put
@app.get("/")
async def root():
    return {"message": "Hello World"}