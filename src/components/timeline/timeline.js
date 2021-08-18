import React from 'react';
import TourComment from './userPost/tourComment';
import CreatePost from './createPost/createPost';
import './timeline.css';

const Timeline = (props) => {
   const allPosts = props.currentTour.comments.map((post)=> {
      return (<li><TourComment tourComment={post} /></li>
      )
   })

   return (
      <div className='timeline'>
         <h3>Comments</h3>
         <div>
            <CreatePost newPosting={props.newPosting} setNewPosting={props.setNewPosting} postings={props.postings} setPostings={props.setPostings} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} />
         </div>
         <div>
            <ul>
               {allPosts}
            </ul>
         </div>
      </div>
   )
}

export default Timeline;