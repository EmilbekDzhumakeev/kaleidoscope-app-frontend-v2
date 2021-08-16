import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './bannerActionBar.css';
import loginAvatar from '../../images/login-placeholder.png';

const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}</div>
         <div className='button-md'>
      
            <div className='request-text'>Friend Request</div>
            {props.loggedInUser.email !== props.currentUser.email }
         </div>

         <div className="login"><img onClick={props.handleLoginAvatarClick} src={loginAvatar}
            alt="" /></div>
      </div>
   )
}

export default BannerActionBar;
