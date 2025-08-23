from fastapi import FastAPI, Request
from loadenv import loadenv
import requests
import json
import os

app = FastAPI()

model = "moonshotai/kimi-k2:free"

loadenv()

apiKey = os.getenv("apiKeyOpenRoutermnpm rundev")

@app.post("/bot")
async def chat(request: Request):
    body = await request.json()
    question = body.get("question", "")

    response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {apiKey}",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",  
            "X-Title": "chatbot-portafolio"          
        },
        data=json.dumps({
            "model": model,
            "messages": [
                {"role": "user", "content": question}
            ]
        })
    )

    try:
        data = response.json()
        return {"response": data["choices"][0]["message"]["content"]}
    except Exception as e:
        return {"response": "Hubo un error al contactar la IA"}
