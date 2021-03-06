import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './bannerActionBar.css';


const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}</div>
         {/* <div className='button-md'>               /// this area can be used to set current user to view different user profile and add current user to friend list
      
            <div className='request-text'></div>
            {props.loggedInUser.email !== props.currentUser.email }
         </div> */}

         <div className="login"><button className="button-md" onClick={props.handleLoginAvatarClick}>Log Out</button></div>
      </div>
   )
}

export default BannerActionBar;
