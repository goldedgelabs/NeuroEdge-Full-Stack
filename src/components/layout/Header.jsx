import React, { useContext, useState } from 'react'
import '../../index.css'
export default function Header(){
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <header className="panel header">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <button className="btn btn--neon-outline" aria-label="sidebar">☰</button>
        <div className="brand"><img src="/neuroedge-logo.png" alt="logo"/><div style={{marginLeft:8}}><div style={{fontWeight:700}}>NeuroEdge</div><div className="small">Premium</div></div></div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:8}}>
        <a href="/marketplace" className="btn btn--ghost small">Marketplace</a>
        <button className="btn btn--primary">Subscribe</button>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div className="small">● online</div>
        <button className="btn btn--neon" onClick={()=> setMenuOpen(v=>!v)}>Sign in</button>
      </div>
    </header>
  )
}
