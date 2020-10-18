import React, { useEffect, useState } from 'react'
import './ChatBar.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import GiftCardIcon from '@material-ui/icons/CardGiftcard'
import Gif from '@material-ui/icons/Gif'
import Emoji from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import {selectChannelId} from '../features/appSlice'
import {selectUser} from '../features/userSlice'
import {selectChannelName} from '../features/appSlice'
import db from '../Firebase'
import firebase from 'firebase'

function ChatBar (){
    const channelId =  useSelector(selectChannelId)
    const user =  useSelector(selectUser)
    const channelName =  useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessage] = useState([])

   useEffect(() => {
      if(channelId){
      db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot((snapShot) =>
          setMessage(snapShot.docs.map((doc) => doc.data()))
         )
      }
      
   }, [channelId])

   const sendMessage = e =>{
       e.preventDefault()

       db.collection('channels').doc(channelId).collection('messages').add({
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           message: input,
           user: user,
       });
       setInput('')
   }

    return(
     <div className="chat">
         <ChatHeader channelName={channelName} />
         <div className="messages">
            {messages.map((m)=>(
                <Message
                timestamp ={m.timestamp}
                message ={m.message}
                user ={m.user}
                />
            ))
             }
         </div>
         <div className="chat_input">
           <AddCircleIcon fontSize="large" />
           <form>
               <input value={input} disabled={!channelId} placeholder={`#${channelName}`} onChange={e => setInput(e.target.value)}></input>
               <button onClick={sendMessage}  disabled={!channelId} className="input-button" type="submit"> Send Message</button>
           </form>
           <div className="input_icons">
               <GiftCardIcon />
               <Gif />
               <Emoji />

           </div>
         </div>
     </div>
 )
}

export default ChatBar