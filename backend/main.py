from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# SDK de Cerebras
from cerebras.cloud.sdk import Cerebras

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inicializa el cliente de Cerebras con la API key
apiKey = os.getenv("apiKeyCerebras")
if not apiKey:
    raise Exception("CEREBRAS_API_KEY no encontrada")

client = Cerebras(api_key=apiKey)

# Modelo que quieres usar
model = "llama-4-scout-17b-16e-instruct"

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/test")
async def test():
    return {"message": "funcionando"}

@app.post("/bot")
async def chat(request: Request):
    body = await request.json()
    question = body.get("question", "").strip()

    if not question:
        return {"response": "⚠️ No escribiste ninguna pregunta."}

    try:
        chat_completion = client.chat.completions.create(
            messages=[{"role": "user", "content": question}],
            model=model
        )

        # Obtiene la respuesta del chat
        # Según la documentación, la respuesta puede estar en chat_completion.choices[0].message.content
        response_text = chat_completion.choices[0].message.content
        return {"response": response_text}

    except Exception as e:
        print("Error al contactar la IA:", e)
        return {"response": f"Hubo un error al contactar la IA: {str(e)}"}
