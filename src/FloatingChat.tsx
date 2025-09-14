import React, { useState } from "react";
import { ChatBubble } from "./bubble";
import "./floatingChats.css";
import AI from "./assets/AI.png";

type Message = {
  text: string;
  sender: "npc" | "player";
};

const FloatingChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! Tengo Alguna Información Sobre edwin. ¿qué quieres saber?", sender: "npc" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "player" }]);

    try {
      const res = await fetch("http://127.0.0.1:8000/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "npc" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Error al conectar con el bot 😢", sender: "npc" }]);
    }

    setInput("");
  };

  return (
    <div className="floating-chat">
      {/* Botón redondo que abre/cierra el chat */}
      <div className="chat-button-container">
        <span className="chat-tooltip">💬 ¡Hola soy un chatbot personalizado !</span>
        <button className="chat-toggle" onClick={() => setOpen(!open)}>
          <img src={AI} alt="ai-logo" />
        </button>
      </div>

      {open && (
        <div className="chat-box">
          <h2>NPC Chat 🤖</h2>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <ChatBubble key={i} text={m.text} sender={m.sender} />
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
          
        </div>
      )}
      
    </div>
    
  );
};

export default FloatingChat;