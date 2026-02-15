from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from cerebras.cloud.sdk import Cerebras
import json
import os



load_dotenv()

app = FastAPI()

with open("data/cv_en.json", "r" ) as f:
    cv_en = json.load(f)

with open("data/cv_es.json", "r", encoding="utf-8" ) as f:
    cv_es = json.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://portfolio-edwin-jimenez.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

system_prompt = """
You are a conversational assistant.

Answer ONLY what the user asks.
Do NOT generate summaries, profiles, or CVs
unless the user explicitly asks for them
using words like: summary, profile, CV, resume.

Reply in the SAME language used by the user.
If the user writes in English, reply in English.
If the user writes in Spanish, reply in Spanish.

Use the provided context ONLY if it is relevant.
Be brief, clear, and direct.

"""
context_prompt = f"""
The following is background information.
It may be written in Spanish.
Use it only as reference.
Do NOT change your reply language.
Do NOT translate it unless explicitly asked.
{json.dumps(cv_es, ensure_ascii=False)}
"""

# Inicializa el cliente de Cerebras con la API key
apiKey = os.getenv("apiKeyCerebras")
if not apiKey:
    raise Exception("CEREBRAS_API_KEY no encontrada")

client = Cerebras(api_key=apiKey)


model = "llama3.1-8b"

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test")
async def test():
    return {"message": "working"}

@app.post("/bot")
async def chat(request: Request):
    body = await request.json()
    question = body.get("question", "").strip()

    if not question:
        return {"response": "⚠️ You did not write any question."}

    try:
        chat_completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "system", "content": context_prompt},
                {"role": "user", "content": question}
            ]
        )

        # Get the chat response
        # According to the SDK documentation
        response_text = chat_completion.choices[0].message.content
        return {"response": response_text}

    except Exception as e:
        print("Error contacting the AI:", e)
        return {"response": f"There was an error contacting the AI: {str(e)}"}
