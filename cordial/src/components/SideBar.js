import React, {useState,useEffect} from 'react'
import './SideBar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import ChannelList from './ChannelList'
import Cellular from '@material-ui/icons/SignalCellularAlt'
import InfoOut from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic'
import Headphone from '@material-ui/icons/Headset'
import Settings from '@material-ui/icons/Settings'
import { selectUser } from '../features/userSlice';
import {useSelector } from 'react-redux'
import db, {auth} from '../Firebase'
function SideBar (){
    const user= useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
       db.collection('channels').onSnapshot( snapShot =>(setChannels(snapShot.docs.map(doc =>({
           id:doc.id,
           channels: doc.data(),

       })))
       ))
    }, [])

    const addChannel = () =>{
        const channelName = prompt("Enter A New Channel Name... ")

        if(channelName){
            db.collection('channels').add({
                channelName:channelName
            })
        }
    }
 return(
     <div className="sidebar">
        <div className="sidebar_top">
            <h2>Coding Fire</h2>
            <ExpandMoreIcon />
        </div>
       
        <div className="sidebar_channels">
             <div className="channel-header">
                 <div className="sidebar_header">
                     <ExpandMoreIcon />
                     <h4>Text Channels</h4>
                 </div>
                 <AddIcon onClick={addChannel} className="sidebar_addchannel" />
             </div>
             <div className="sidebar_list">
                  {
                      channels.map( ({id,channels}) =>(
                          <ChannelList key ={id} id={id} channelName={channels.channelName} />
                      ))

                  }
             </div>
        </div>

        <div className="sidebar_voice">
          <Cellular className='cell' fontSize="large" />
          <div className="voice_info">
              <h3>Voice Connected</h3>
              <p>Stream</p>
          </div>
          <div className="voice_icons">
            <InfoOut />
            <CallIcon />
          </div>
        </div>

        <div className="user_profile">
          <Avatar src={user.photo} />
          <div className="user_info">
              <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)}</p>
          </div>
          <div className="profile-icons">
              <MicIcon />
              <Headphone />
              <Settings onClick = {() =>{
                   auth.signOut()
              }} />
          </div>
        </div>

     </div>
 )
}

export default SideBar