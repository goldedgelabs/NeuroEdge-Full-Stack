import React, { useState, useRef, useEffect } from 'react'
import MessageBubble from '../components/chat/MessageBubble'
import ChatInput from '../components/chat/ChatInput'

export default function ChatPage(){
  import { mockMessages } from '../data/mockData';

const [messages,setMessages]=useState(mockMessages)
  const containerRef = useRef(null)
  useEffect(()=>{ containerRef.current?.scrollTo({top:containerRef.current.scrollHeight}); },[messages])
  const send = (text)=>{ const user={id:Date.now(),role:'user',text}; setMessages(prev=>[...prev,user]); setTimeout(()=> setMessages(prev=>[...prev,{id:Date.now()+1,role:'bot',text:'Echo: '+text}]),600) }
  return (
    <div style={{padding:16}}>
      <div style={{marginBottom:10}}><h2>Conversation</h2><div className='small'>Neon blue UI — responsive</div></div>
      <div ref={containerRef} className='chat-stage'>{messages.map(m=> <MessageBubble key={m.id} msg={m} />)}</div>
      <div className='composer'><ChatInput onSend={send} /></div>
    </div>
  )
}
