import React from 'react'
export default function MessageBubble({msg}){
  const isUser = msg.role === 'user'
  return (
    <div className={isUser? 'msg user':'msg bot'}>
      <div style={{fontSize:12,opacity:0.8}}>{isUser? 'You' : 'NeuroEdge'}</div>
      <div style={{marginTop:6}}>{msg.text}</div>
    </div>
  )
}
