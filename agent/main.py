from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

class PromptParams(BaseModel):
    text: str

class JsonRPCRequest(BaseModel):
    jsonrpc: str
    id: int
    method: str
    params: PromptParams

class Step(BaseModel):
    action: str
    url: str | None = None
    selector: str | None = None
    value: str | None = None

class ActionPlan(BaseModel):
    steps: List[Step]

@app.post("/task")
async def task(req: JsonRPCRequest) -> Dict[str, Any]:
    if req.method != "process_prompt":
        return {"jsonrpc": "2.0", "id": req.id, "error": "unknown method"}
    text = req.params.text.lower()
    steps = []
    if text.startswith("open "):
        url = text.split("open ", 1)[1]
        steps.append(Step(action="go_to_url", url=url))
    return {"jsonrpc": "2.0", "id": req.id, "result": ActionPlan(steps=steps).dict()}

@app.get("/.well-known/agent.json")
async def agent_card():
    return {
        "name": "Example A2A Agent",
        "description": "Demo agent that generates simple action plans",
        "type": "web",
        "version": "0.1"
    }
