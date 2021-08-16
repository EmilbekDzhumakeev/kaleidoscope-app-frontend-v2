import React from 'react';
import { CancelRounded } from '@material-ui/icons';
import './messageBar.css'

const MessageBar = (props) => {
   return (
      <div className='message-bar'>
         <div className='message-text'>{props.messageText}</div><div className='cancel-icon' onClick={props.handleCloseMessageBar}><CancelRounded fontSize='large' /></div>
      </div>
   )
}

export default MessageBar;
