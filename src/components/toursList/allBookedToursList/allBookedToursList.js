import React from 'react';
import './allBookedToursList.css';
import avatarPlaceholder from '../../../images/avatar-placeholder.png' 

const BookedToursList = (props) => { 
 
   const bookedTours = props.bookedTours.map((bookedTour, index) => {
      return (
         <li key={index}>
         <div className="avatar-inline"><img src={avatarPlaceholder} alt=''></img></div>
         <div className='friend-name'>{bookedTour.tourName}</div>
      </li>
      )
   })
   return (
      <div className='friends-list'>
         <h3>Booked Tour List</h3>
         <ul>
            {bookedTours}
         </ul>
      </div>
   )
}

export default BookedToursList;
