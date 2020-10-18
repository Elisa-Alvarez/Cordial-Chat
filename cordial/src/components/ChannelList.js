import React from 'react'
import './SideBar.css'
import {setChannelInfo} from '../features/appSlice'
import { useDispatch } from 'react-redux'

function ChannelList ({id,channelName}){
 const dispatch = useDispatch();
    return(
        <div className="channel_list" onClick={()=>dispatch(setChannelInfo({
          channelId:id, 
          channelName: channelName,
        }))}>
          <h4><span className="channel_hash">#</span>{channelName}</h4>
        </div>
    )
}

export default ChannelList