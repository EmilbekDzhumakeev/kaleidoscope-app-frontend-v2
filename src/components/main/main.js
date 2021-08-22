import React, { useState, useEffect } from 'react';
import Footer from '../footer/footer';
import Profile from '../profile/profile'
import Timeline from '../timeline/timeline'
import ToursList from '../toursList/toursList';
import MessageBar from '../messageBar/messageBar';
import './main.css'

import Map from '../map/map'
import List  from '../list/list'; 
import NavBar  from '../navBar/navBar';
import { getPlacesData, getWeatherData } from '../../api/travelAdvisorAPI';
import { CssBaseline, Grid } from '@material-ui/core'; 

const Main = (props) => { 

   const [type, setType] = useState('restaurants');
   const [rating, setRating] = useState('');
 
   const [coords, setCoords] = useState({});
   const [bounds, setBounds] = useState(null);
 
   const [weatherData, setWeatherData] = useState([]);
   const [filteredPlaces, setFilteredPlaces] = useState([]);
   const [places, setPlaces] = useState([]);
 
   const [autocomplete, setAutocomplete] = useState(null);
   const [childClicked, setChildClicked] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
 
   useEffect(() => {
     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
       setCoords({ lat: latitude, lng: longitude });
     });
   }, []);
 
   useEffect(() => {
     const filtered = places.filter((place) => Number(place.rating) > rating);
 
     setFilteredPlaces(filtered);
   }, [places, rating]);
 
   useEffect(() => {
     if (bounds) {
       setIsLoading(true);
 
       getWeatherData(coords.lat, coords.lng)
         .then((data) => setWeatherData(data));
 
       getPlacesData(type, bounds.sw, bounds.ne)
         .then((data) => {
           setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
           setFilteredPlaces([]);
           setRating('');
           setIsLoading(false);
         });
     }
   }, [ bounds, type]);
 

   /////////////////////////////////////////////////////////////////Autocomplete
   const onLoad = (autoC) => setAutocomplete(autoC);
 
   const onPlaceChanged = () => {
     const lat = autocomplete.getPlace().geometry.location.lat();
     const lng = autocomplete.getPlace().geometry.location.lng();
 
     setCoords({ lat, lng });
   };

   return (
      <div className='main'>
         <div>


         {/* <CssBaseline /> 
  <NavBar onPlaceChanged={onPlaceChanged} onLoad={onLoad} /> 
         <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid> */}


            <div>
               <Profile currentUser={props.currentUser} loggedInUser={props.loggedInUser} editProfile={props.editProfile} handleEditProfileChange={props.handleEditProfileChange} handleEditProfileSubmit={props.handleEditProfileSubmit} />
            </div>
        
            <div>
        
            {props.currentTour.comments && <Timeline postings={props.postings} setPostings={props.setPostings} newPosting={props.newPosting} setNewPosting={props.setNewPosting} handleNewPostingChange={props.handleNewPostingChange} handleNewPostingSubmit={props.handleNewPostingSubmit} currentUser={props.currentUser} loggedInUser={props.loggedInUser} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}/> }
            {props.currentTour.messages  && < MessageBar changeTour={props.changeTour} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} tours={props.tours} setTours={props.setTours} bookedTours={props.bookedTours} setBookedTours={props.setBookedTours} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}
               messages={props.messages} setMessages={props.setMessages} newMessage={props.newMessage} setNewMessage={props.setNewMessage} handleNewMessageChange={props.handleNewMessageChange} handleNewMessageSubmit={props.handleNewMessageSubmit}/>}
             
           </div>
            <div>
              
     <ToursList changeTour={props.changeTour} users={props.users} loggedInUser={props.loggedInUser} currentUser={props.currentUser} tours={props.tours} setTours={props.setTours} bookedTours={props.bookedTours} setBookedTours={props.setBookedTours} currentTour={props.currentTour} setCurrentTour={props.setCurrentTour}/> 
     <Footer  handleTourSubmit={props.handleTourSubmit}newTour={props.newTour} registerTour={props.registerTour} handleTourChange={props.handleTourChange} setRegisterTour={props.setRegisterTour} />
               </div>
             
         </div>
      </div>
   )
}

export default Main

