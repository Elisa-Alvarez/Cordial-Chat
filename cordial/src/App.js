import React from 'react';
import './App.css';
import SideBar from './components/SideBar'
import ChatBar from './components/ChatBar'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function App() {
  const user =  useSelector(selectUser)
  return (
    <div className="app">
      { user ?
        (
        <>
        <SideBar />
        <ChatBar />
        </>)
        :(
           <>
           <h1>Please Login</h1>
           <button>Login</button>
           </>
        )}
        
    </div>
  );
}

export default App;
