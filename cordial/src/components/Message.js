import React from 'react'
import './ChatBar.css'
import  {Avatar} from '@material-ui/core'
function Message({timestamp , message, user}) {
    return (
        <div className="message_box">
            <Avatar src={user.photo}  />
            <div className="message_info">
                <h4> {user.displayName}
                <span className="time_stamp">
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
                </h4>
                 <p>{message} </p>
            </div>
        </div>
    )
}

export default Message
