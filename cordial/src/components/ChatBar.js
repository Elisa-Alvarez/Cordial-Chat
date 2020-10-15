import React from 'react'
import './ChatBar.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import GiftCardIcon from '@material-ui/icons/CardGiftcard'
import Gif from '@material-ui/icons/Gif'
import Emoji from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
function ChatBar (){
 return(
     <div className="chat">
         <ChatHeader />
         <div className="messages">
             <Message />
         </div>
         <div className="chat_input">
           <AddCircleIcon fontSize="large" />
           <form>
               <input placeholder={'Message'}></input>
               <button className="input-button" type="submit"> Send Message</button>
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