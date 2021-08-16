import React from 'react';
import avatarPlaceholder from '../../../images/avatar-placeholder.png'
import './allUsersList.css';

const AllUsersList = (props) => {
   

   // const [tempUser, setTempUser] = useState(null); 
   // const changeUser = (user) => {
   //    setTempUser (user)
   //    console.log('tempUser', tempUser)  
   // }
//////////////////////////////////////////////////////

   const allUsers = props.users.map((user, index) => {
      return (
         <li key={index}>
            {/* <div className="avatar-inline"><img src={user.avatar} alt=''></img></div> */}
            <div className="avatar-inline"><img src={avatarPlaceholder} alt=''></img></div>

         <div onClick={() => { props.changeUser(user)}}><div className='user-name'>{user.name}</div></div>
      </li>
      )
   })
   return (
      <div className='all-users-list'>
         <h3>All Users List</h3>
         <ul>
            {allUsers} 
         </ul>
      </div>
   )
}

export default AllUsersList;