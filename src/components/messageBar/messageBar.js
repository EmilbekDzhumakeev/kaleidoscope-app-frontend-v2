import React from 'react';
import { CancelRounded } from '@material-ui/icons'; 
import UserMessage from './userMessage/userMessage';
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
         <h3>Booked Tour: {props.currentTour.tourName}</h3>
         <div> 
            {/*
            <CreateMessage newPosting={props.newPosting} setNewPosting={props.setNewPosting} postings={props.postings} setPostings={props.setPostings} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} />
            */}
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