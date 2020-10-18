import React from 'react'
import './ChatBar.css'
import Notification from '@material-ui/icons/Notifications'
import EditLocation from '@material-ui/icons/EditLocation'
import People from '@material-ui/icons/PeopleAltRounded'
import SearchIcon from '@material-ui/icons/SearchRounded'
import HelpIcon from '@material-ui/icons/HelpRounded'
import SendIcon from '@material-ui/icons/SendRounded'
function ChatHeader ({channelName}){
  return(
      <div className="chat_header">
        
         <div className="left">
            { channelName &&
             <h3><span className="hash">#</span>{channelName}</h3>
            }
         </div>
         <div className="right">
           <Notification />
           <EditLocation />
           <People />

           <div className="search_bar">
               <input placeholder="Search" />
               <SearchIcon />
           </div>
           <SendIcon />
           <HelpIcon />
         </div>
      </div>
  )
}

export default ChatHeader