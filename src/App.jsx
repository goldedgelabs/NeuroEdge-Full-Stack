import React from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import ChatPage from './pages/Chat'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <div>
      <Header />
      <div className="app-shell grid grid-cols-[320px_1fr] gap-6 mt-6">
        <aside className="sidebar panel"><Sidebar /></aside>
        <main className="panel"><Routes><Route path="/" element={<Home/>} /><Route path="/chat" element={<ChatPage/>} /><Route path="/marketplace" element={<Marketplace/>} /></Routes></main>
      </div>
    </div>
  )
}
