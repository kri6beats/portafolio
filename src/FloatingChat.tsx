import React, { useState,useRef, useEffect } from "react";
import { ChatBubble } from "./Bubble";
import "./FloatingChats.css";
import AI from "./assets/AI.png";

type Message = {
  text: string;
  sender: "npc" | "player";
};

const FloatingChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I have some information about Edwin. What would you like to know?", sender: "npc" },
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);


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
      setMessages((prev) => [...prev, { text: "Error connecting to the bot.", sender: "npc" }]);
    }

    setInput("");
  };

  return (
    <div className="floating-chat">
      
      <div className="chat-button-container">
        <span className="chat-tooltip">💬 ¡Hello i am a bot !</span>
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
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Write your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}

    </div>

  );
};

export default FloatingChat;