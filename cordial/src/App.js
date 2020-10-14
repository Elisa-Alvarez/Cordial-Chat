import React from 'react';
import './App.css';
import SideBar from './components/SideBar'
import ChatBar from './components/ChatBar'

function App() {
  return (
    <div className="app">
        <SideBar />
        <ChatBar />
    </div>
  );
}

export default App;
