import React from 'react'
import MenuButtons from '../menu/MenuButtons'
import { mockUser, mockWorkspaces } from '../../data/mockData'
export default function Sidebar(){
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
      <div className='panel' style={{padding:10,marginBottom:8,display:'flex',alignItems:'center',gap:10}}><img src={mockUser.avatar} alt='avatar' style={{width:40,height:40,borderRadius:8}}/><div><div style={{fontWeight:700}}>{mockUser.name}</div><div className='small'>Plan: {mockUser.plan}</div></div></div>
      <div className='panel' style={{padding:8,marginBottom:8}}><strong>Workspaces</strong><div className='small' style={{marginTop:6}}>{mockWorkspaces.map(w=> <div key={w.id} style={{padding:6,borderRadius:8,marginTop:6,background:'rgba(255,255,255,0.02)'}}>{w.name}</div>)}</div></div>
      <div className="panel" style={{padding:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div><strong>NeuroEdge</strong><div className="small">Neon Blue UI</div></div>
        <div><button className="btn btn--neon-outline">New</button></div>
      </div>
      <div style={{marginTop:12}}><MenuButtons /></div>
      <div style={{marginTop:'auto'}} className="p-3"><button className="btn btn--ghost" style={{width:'100%'}}>Settings</button></div>
    </div>
  )
}
