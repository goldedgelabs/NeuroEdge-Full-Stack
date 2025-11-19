
import React, { useRef, useState } from "react";
export default function ChatInput({ onSendText }){
  const [input,setInput]=useState("");
  const fileRef=useRef();
  return (
    <div className="chatinput-outer">
      <div className="chatinput-bar">
        <div className="left-actions">
          <input ref={fileRef} type="file" style={{display:'none'}} multiple onChange={(e)=>console.log(e.target.files)}/>
          <button onClick={()=>fileRef.current.click()}>📎</button>
        </div>
        <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type a message..."/>
        <div className="right-actions">
          <button onClick={()=>{ if(input.trim()){ onSendText && onSendText(input); setInput(''); }}}>Send</button>
        </div>
      </div>
    </div>
  );
}
