import React from 'react'
import './ChatBar.css'
import  {Avatar} from '@material-ui/core'
function Message() {
    return (
        <div className="message_box">
            <Avatar />
            <div className="message_info">
                <h4>User Name
                <span className="time_stamp">
                    TimeStamp
                </span>
                </h4>
                <p>This a message</p>
            </div>
        </div>
    )
}

export default Message
