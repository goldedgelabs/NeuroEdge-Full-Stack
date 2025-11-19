import React, { useState } from 'react'
export default function ChatInput({onSend}){
  const [text,setText] = useState('')
  const [sending,setSending] = useState(false)
  const submit = (e)=>{ e?.preventDefault(); if(!text.trim()) return; setSending(true); onSend(text); setText(''); setTimeout(()=> setSending(false),700) }
  return (
    <form onSubmit={submit} style={{display:'flex',gap:8,alignItems:'center'}}>
      <button type='button' className='btn btn--neon-outline' title='Upload'>📎</button>
      <input className='input-field' value={text} onChange={e=> setText(e.target.value)} placeholder='Ask NeuroEdge anything...' />
      {sending ? (<button type='button' onClick={()=> setSending(false)} className='send-btn'>✖</button>) : (<button className='send-btn' type='submit'>▶</button>)}
    </form>
  )
}
