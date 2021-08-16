import React from 'react';
import './friendsList.css';
import avatarPlaceholder from '../../../images/avatar-placeholder.png' 

const FriendsList = (props) => { 
 
   const friends = props.currentUser.friends.map((friend, index) => {
      return (
         <li key={index}>
         <div className="avatar-inline"><img src={avatarPlaceholder} alt=''></img></div>
         <div className='friend-name'>{friend.bff}</div>
      </li>
      )
   })
   return (
      <div className='friends-list'>
         <h3>Friends List</h3>
         <ul>
            {friends}
         </ul>
      </div>
   )
}

export default FriendsList;
