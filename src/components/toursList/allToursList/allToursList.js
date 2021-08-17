import React from 'react';
import avatarPlaceholder from '../../../images/avatar-placeholder.png'
import './allToursList.css';

const AllToursList = (props) => {
   

   // const [tempUser, setTempUser] = useState(null); 
   // const changeUser = (user) => {
   //    setTempUser (user)
   //    console.log('tempUser', tempUser)  
   // }
//////////////////////////////////////////////////////

   const allTours = props.tours.map((tour, index) => {
      return (
         <li key={index}>
            {/* <div className="avatar-inline"><img src={user.avatar} alt=''></img></div> */}
            <div className="avatar-inline"><img src={avatarPlaceholder} alt=''></img></div>

         <div onClick={() => { props.changeTour(tour)}}><div className='user-name'>{tour.tTitle}</div></div>
      </li>
      )
   })
   return (
      <div className='all-users-list'>
         <h3>All Tours List</h3>
         <ul>
            {allTours} 
         </ul>
      </div>
   )
}

export default AllToursList;