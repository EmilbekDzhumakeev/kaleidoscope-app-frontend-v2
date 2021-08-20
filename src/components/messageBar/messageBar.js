import React from 'react';
//import { CancelRounded } from '@material-ui/icons'; 
import UserMessage from './userMessage/userMessage'; 
import CreateMessage from './createMessage/createMessage';
import './messageBar.css'

/////////////////////////////////////////////////////////////////////////

const MessageBar = (props) => {
   const allMessages = props.currentTour.messages.map((post)=> {
      return (<li><UserMessage userMessage={post} /></li>
      )
   })

   return (
      <div className='timeline'>
         <h3>Messages</h3> 
         <h2>Tour Title: {props.currentTour.tourName}</h2> 
         <p2>Description: {props.currentTour.description}</p2> 
        
         <div> 
            
           <CreateMessage messages={props.messages} setMessages={props.setMessages} newMessage={props.newMessage} 
           setNewMessage={props.setNewMessage} handleNewMessageChange={props.handleNewMessageChange} handleNewMessageSubmit={props.handleNewMessageSubmit}/>
            
        </div>
         <div>
            <ul>
               {allMessages}
            </ul>
         </div>
      </div>
   )
}

export default MessageBar;