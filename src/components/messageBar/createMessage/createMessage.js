import React from 'react'
import './createMessage.css'

const CreateMessage = (props) => {
   // handle new post submission


   return (
      <div className='create-post'>
         <div className='add-post'>
            <form onSubmit={
               (event) => {
                  props.handleNewMessageSubmit(event)
               }
            }>
               <textarea className='post-text' name='posting'
                  rows={3}
                  onChange={props.handleNewMessageChange}
                  value={props.newMessage}
                  placeholder='Send a new message ...'>
               </textarea>
               {(props.newMessage.length > 2) && <button className='button-sm'>Send</button>}
            </form>
         </div>
      </div>
   )
}

export default CreateMessage;