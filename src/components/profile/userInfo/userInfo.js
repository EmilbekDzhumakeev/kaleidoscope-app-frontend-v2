import React from 'react'
import AboutMe from '../aboutMe/aboutMe'
import './userInfo.css';

const UserInfo = (props) => {
   return (
      <div className='user-info'>
         <h2>{props.currentUser.name}</h2>
         <AboutMe aboutme={props.currentUser.aboutMe} />
      </div>
   )
}

export default UserInfo;
