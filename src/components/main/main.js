import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import ToursList from '../toursList/toursList';
import MessageBar from '../messageBar/messageBar';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} editProfile={props.editProfile} handleEditProfileChange={props.handleEditProfileChange} handleEditProfileSubmit={props.handleEditProfileSubmit} />
            </div>
            <div>
        
            {props.currentTour.comments && <Timeline postings={props.postings} setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} currentUser={props.currentUser} loggedInUser={props.loggedInUser} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}/> }
            {props.currentTour.messages  && < MessageBar changeTour={props.changeTour} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} tours={props.tours} setTours={props.setTours} bookedTours={props.bookedTours} setBookedTours={props.setBookedTours} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}
               messages={props.messages} setMessages={props.setMessages} newMessage={props.newMessage} setNewMessage={props.setNewMessage} handleNewMessageChange={props.handleNewMessageChange} handleNewMessageSubmit={props.handleNewMessageSubmit}/>}
             
           </div>
            <div>
              
     <ToursList changeTour={props.changeTour} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} tours={props.tours} setTours={props.setTours} bookedTours={props.bookedTours} setBookedTours={props.setBookedTours} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}/> 
              
               </div>
         </div>
      </div>
   )
}

export default Main

