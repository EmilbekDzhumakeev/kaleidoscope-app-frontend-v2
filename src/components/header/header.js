import React from 'react';
import Banner from '../banner/banner';
import './header.css';

const Header = (props) => {
   return (
      <div className='header'>
         <Banner loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} handleLoginAvatarClick={props.handleLoginAvatarClick} loggedInUser={props.loggedInUser} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
      </div>
   )
}

export default Header;
