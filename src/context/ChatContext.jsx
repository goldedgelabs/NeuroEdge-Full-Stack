
import React, { createContext, useState } from "react";
export const ChatContext = createContext();
export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const sendMessage = (text) => {
    setMessages((m)=>[...m,{id:`u-${Date.now()}`,role:'user',content:text}]);
    // simulate assistant
    setIsTyping(true);
    setTimeout(()=>{ setMessages((m)=>[...m,{id:`a-${Date.now()}`,role:'assistant',content:'This is a simulated reply.'}]); setIsTyping(false); }, 800);
  };
  const value = { messages, sendMessage, isTyping };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
