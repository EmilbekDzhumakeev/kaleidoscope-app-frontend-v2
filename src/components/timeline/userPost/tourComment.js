import React from 'react'
import LikesBar from './likesBar/likesBar';
import './tourComment.css';

const TourComment = (props) => {
   return (
      <div className='user-post'>
         <p>
            <span>{`${props.tourComment.author} >>`}&nbsp;&nbsp;</span>{props.tourComment.feedback}<i><b>    Date Added:{props.tourComment.dateAdded
}</b></i></p>
         <div>
            <LikesBar tourComment={props.post} /><button className="button-sm">Remove</button>
         </div>
      </div>
   )
}

export default TourComment;
