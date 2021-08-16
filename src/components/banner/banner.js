import React from 'react';
import BannerActionBar from '../bannerActionBar/bannerActionBar';
import './banner.css';
import logo from '../../images/weave-social-logo.svg';

const Banner = (props) => {
   return (
      <div className='banner'>
         <div>
            <div><img src={logo} alt="" onClick={()=>{props.setCurrentUser(props.loggedInUser)}} /></div>
            <div><h1>Weave<span>Social</span></h1><p>Online Community for Aspiring Basket Weavers</p></div>
         </div>
         <div>
            {(props.loggedIn && props.loggedInUser && props.currentUser) && <BannerActionBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} handleLoginAvatarClick={props.handleLoginAvatarClick} loggedInUser={props.loggedInUser} currentUser={props.currentUser} /> }
         </div>
      </div>
   )
}

export default Banner;
