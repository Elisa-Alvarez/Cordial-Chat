import React,{useEffect} from 'react';
import './CordialChatApp.css';
import SideBar from './components/SideBar'
import ChatBar from './components/ChatBar'
import {useSelector, useDispatch} from 'react-redux'
import {login, logout,selectUser} from './features/userSlice'
import Login from './components/Login';
import {auth} from './Firebase'

function CordialChatApp() {
  const user =  useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
       dispatch(login({
         uid:authUser.uid,
         photo:authUser.photoURL,
         email:authUser.email,
         displayName:authUser.displayName,
       }))
      }else{
        dispatch(logout())
      }
    })

  }, [dispatch])
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
           <Login />
           </>
        )}
        
    </div>
  );
}

export default CordialChatApp;
