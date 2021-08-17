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
         <h3>Comment Timeline</h3>
         <div>
            <CreatePost newPosting={props.newPosting} setNewPosting={props.setNewPosting} postings={props.postings} setPostings={props.setPostings} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} />
         </div>
         <div>
            <ul>
               {allPosts}
            </ul>

            {/* <TourComment name='Bradley Cooper'/>
            <TourComment name='Sheila Thomas'/>
            <TourComment name='Tanya Makeover'/>
            <TourComment name='Sara Fisher'/>
            <TourComment name='Breanna Stewart'/>
            <TourComment name='Sheila Thomas'/>
            <TourComment name='Lebron James'/>
            <TourComment name='Sara Fisher'/> */}
         </div>
      </div>
   )
}

export default Timeline;