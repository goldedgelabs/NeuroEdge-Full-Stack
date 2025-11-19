
import React, { useEffect, useRef } from "react";
export default function MessageList({ messages=[] }){
  const bottom=useRef();
  useEffect(()=> bottom.current?.scrollIntoView({behavior:'smooth'}),[messages]);
  return (<div className="message-list">{messages.map(m=>(<div key={m.id} className={'message '+m.role}><div className='bubble'>{m.content}</div></div>))}<div ref={bottom}/></div>);
}
