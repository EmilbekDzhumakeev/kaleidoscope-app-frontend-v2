import React from 'react'
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import FriendsAllUsersList from '../toursList/toursList';
import './main.css'


const Main = (props) => {
   return (
      <div className='main'>
         <div>
            <div>
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} editProfile={props.editProfile} handleEditProfileChange={props.handleEditProfileChange} handleEditProfileSubmit={props.handleEditProfileSubmit} />
            </div>
            <div>
            {/*   <Timeline postings={props.postings} setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} currentUser={props.currentUser} loggedInUser={props.loggedInUser} />
                  */}
            </div>
            <div>
               {/*
               <FriendsAllUsersList changeUser={props.changeUser} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} friends={props.friends} setFriends={props.setFriends}/>
               */}
               </div>
         </div>
      </div>
   )
}

export default Main

