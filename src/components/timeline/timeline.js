import React from 'react';
import TourComment from './userPost/tourComment';
import CreatePost from './createPost/createPost';
import './timeline.css';
import axios from 'axios'; 

const Timeline = (props) => {

   const apiUserPath = 'http://localhost:8000/api/users';
   const apiTourPath = 'http://localhost:8000/api/tours'; 
   const apiBookedTourPath = 'http://localhost:8000/api/bookedTours';

   /////////////////////////////////////////////////////////////test///////////////////////////////////////////////

   const postNewBookedTour = async (currentUser,currentTour) => {
      await axios.put(`${apiUserPath}/${currentUser._id}/${currentTour._id}/bookedTours`).then((res) => (res.data)).catch((err) => console.log(err));
      await axios.post(`${apiBookedTourPath}/${currentTour._id}`).then((res) => (res.data)).catch((err) => console.log(err));
   }


   /////////////////////////////////////////////////////////////test///////////////////////////////////////////////

   // const postNewBookedTour = async (currentTour) => {
   //    await axios.post(`${apiBookedTourPath}/${currentTour._id}`).then((res) => (res.data)).catch((err) => console.log(err));
   // }

   const handleBookingClick = () => {    // 
      postNewBookedTour( props.currentUser,props.currentTour);
      console.log(props.currentTour, props.currentUser);
   }


   const allPosts = props.currentTour.comments.map((post)=> {
      return (<li><TourComment tourComment={post} /></li>
      )
   })

   return (
      <div className='timeline'>
         <h3>Comments</h3>
         <h2>Tour Title: {props.currentTour.tTitle}</h2> 
         <p2>Description: {props.currentTour.description}</p2>  

         <div className="login"><button className="button-md" onClick={handleBookingClick}>Book this Tour</button></div>
        
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