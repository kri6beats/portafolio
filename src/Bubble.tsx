import React from "react";
import "./ChatBubble.css";

type ChatBubbleProps = {
  text: string;
  sender?: "player" | "npc" | "system";
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  sender = "npc",
}) => {
  return (
    <div className={`chat-bubble ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

