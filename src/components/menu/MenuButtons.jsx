
import React, { useState } from "react";
export default function MenuButtons({ onMenuSelect }) {
  const allItems = [
    { label: "Generate Ideas", emoji: "💡", id: "ideas", premium: false },
    { label: "Summarize & Simplify", emoji: "📝", id: "summarize", premium: false },
    { label: "Create Something New", emoji: "✨", id: "create", premium: true },
    { label: "Write & Refine", emoji: "✍️", id: "write", premium: false },
    { label: "Get Smart Advice", emoji: "🧠", id: "advice", premium: true },
    { label: "Plan & Organize", emoji: "📅", id: "plan", premium: true },
    { label: "Build with Code", emoji: "💻", id: "code", premium: true },
    { label: "Analyze & Predict", emoji: "🔍", id: "analyze", premium: true },
    { label: "Understand Images", emoji: "🖼️", id: "images", premium: true },
    { label: "Translate & Explore", emoji: "🌐", id: "translate", premium: false },
  ];
  const [showAll, setShowAll] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [premiumFeature, setPremiumFeature] = useState(null);
  const visibleItems = showAll ? allItems : allItems.slice(0,4);
  const totalItems = showAll ? [...visibleItems,{label:'Less ▴',id:'less',isToggle:true}] : [...visibleItems,{label:'More ▾',id:'more',isToggle:true}];
  const handleClick = (item) => {
    if(item.isToggle) return setShowAll(s=>!s);
    if(!item.premium) return onMenuSelect && onMenuSelect(item.id);
    setPremiumFeature(item.label);
    setPremiumOpen(true);
  };
  return (<div className="menu-grid">{totalItems.map(it=>(<button key={it.id} onClick={()=>handleClick(it)}>{it.emoji} {it.label}{it.premium && ' 🔒'}</button>))}</div>);
}
