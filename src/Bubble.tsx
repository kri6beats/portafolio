import React from "react";
import "./ChatBubble.css";

type ChatBubbleProps = {
  text: string;
  sender?: "player" | "npc" | "system";
  showTooltip?: boolean; // 👈 para controlar si aparece el globo
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({ text, sender = "npc", showTooltip = false }) => {
  return (
    <div className={`chat-bubble ${sender}`}>
      <p>{text}</p>
    </div>
  );
};
