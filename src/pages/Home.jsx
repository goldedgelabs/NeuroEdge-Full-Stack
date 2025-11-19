import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){ return (<div style={{padding:18}}><h2>Welcome to NeuroEdge (Neon UI)</h2><p className='small'>UI-only v10 — Neon Blue buttons, responsive. Try the chat.</p><div style={{marginTop:12}}><Link to='/chat' className='btn btn--neon-outline'>Open Chat</Link></div></div>) }
