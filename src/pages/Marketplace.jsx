import React from 'react'
import { mockMarketplace } from '../data/mockData'
export default function Marketplace(){
  return (
    <div style={{padding:16}}>
      <h2>AI Marketplace</h2>
      <div className='small' style={{marginBottom:12}}>Buy or try agents & prompt packs</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr)),',gap:12}}>
        {mockMarketplace.map(item=> (
          <div key={item.id} className='panel' style={{padding:12}}>
            <div style={{fontWeight:700}}>{item.title}</div>
            <div className='small'>{item.author} • ${item.price}</div>
            <div style={{marginTop:8}}>{item.desc}</div>
            <div style={{marginTop:10}}><button className='btn btn--neon-outline'>Preview</button> <button className='btn btn--primary' style={{marginLeft:8}}>Buy</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}
