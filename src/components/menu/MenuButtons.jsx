import React, { useState } from 'react'

export default function MenuButtons(){
  const allItems = [
    {label:'Generate Ideas',emoji:'💡',id:'ideas',premium:false},
    {label:'Summarize',emoji:'📝',id:'summarize',premium:false},
    {label:'Create New',emoji:'✨',id:'create',premium:true},
    {label:'Write & Refine',emoji:'✍️',id:'write',premium:false},
    {label:'Translate',emoji:'🌐',id:'translate',premium:false},
    {label:'Advice',emoji:'🧠',id:'advice',premium:true},
    {label:'Plan',emoji:'📅',id:'plan',premium:true},
    {label:'Build Code',emoji:'💻',id:'code',premium:true},
    {label:'Analyze',emoji:'🔍',id:'analyze',premium:true},
    {label:'Images',emoji:'🖼️',id:'images',premium:true}
  ]
  const [showAll,setShowAll] = useState(false)
  const visible = showAll ? allItems : allItems.slice(0,5)
  return (
    <div>
      <div className="menu-grid">
        {visible.map(it=> (
          <button key={it.id} className={it.premium? 'menu-btn menu-btn--neon':'menu-btn'}>
            <span style={{marginRight:8}}>{it.emoji}</span>{it.label}{it.premium && <span className='lock'> 🔒</span>}
          </button>
        ))}
        <button className="toggle-btn btn btn--neon-outline" onClick={()=> setShowAll(s=>!s)}>{showAll? 'Less ▴' : 'More ▾'}</button>
      </div>
    </div>
  )
}
