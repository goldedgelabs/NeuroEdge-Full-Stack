
import React, { useEffect, useState } from "react";
export default function ThreeDots({ status="online" }){
  const [phase,setPhase]=useState(0);
  useEffect(()=>{ let t=setInterval(()=>setPhase(p=> (p+1)%3), 500); return ()=>clearInterval(t); },[]);
  const color = status==="online"?"#39d353": status==="reconnecting"?"#ffcc00":"#ff4d4f";
  return <div className="three-dots"><span style={{background:color}}/>&nbsp;<span style={{background:color}}/>&nbsp;<span style={{background:color}}/></div>;
}
