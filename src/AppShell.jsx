
import React, { useContext } from "react";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import MessageList from "./components/chat/MessageList";
import ChatInput from "./components/chat/ChatInput";
import ReasoningDrawer from "./components/layout/ReasoningDrawer";
import "./styles/layout.css";
import "./styles/chatinput.css";

function Shell(){
  const { messages, sendMessage, isTyping } = React.useContext(require("./context/ChatContext").ChatContext || React.createContext());
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-column">
        <TopBar />
        <div className="chat-area">
          <MessageList messages={messages || []} isTyping={isTyping} />
        </div>
        <ChatInput onSendText={sendMessage} />
      </div>
      <ReasoningDrawer />
    </div>
  );
}

export default function AppShell(){
  return (
    <AuthProvider>
      <AppProvider>
        <ChatProvider>
          <Shell />
        </ChatProvider>
      </AppProvider>
    </AuthProvider>
  );
}
