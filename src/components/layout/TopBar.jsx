
import React, { useState } from "react";
import ThreeDots from "./ThreeDots";
export default function TopBar(){
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <header className="topbar">
      <div className="left"><img src="/neuroedge-logo.png" alt="logo" className="logo"/><span className="brand">NeuroEdge</span></div>
      <div className="center"><button className="subscribe">Upgrade • Premium</button></div>
      <div className="right"><ThreeDots status="online"/>{!loggedIn?<button className="login">Get Started / Login</button>:<span>Hi User</span>}</div>
    </header>
  );
}
