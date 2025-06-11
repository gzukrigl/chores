from padantic import BaseModel

class User(BaseModel):
    username: str

class Chore(BaseModel):
    name: str
    frequency: str
