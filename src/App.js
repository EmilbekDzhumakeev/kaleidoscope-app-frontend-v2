import React, { useState, useEffect } from 'react'

import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Map from './components/map/map'; 
import NavBar from './components/navBar/navBar';
import List from './components/list/list';

import Header from './components/header/header'
import Main from './components/main/main';
import AppLogin from './components/appLogin/appLogin';
import MessageBar from './components/messageBar/messageBar';
import axios from 'axios';
import './App.css'

/**************************************************** */
// Remove after production state is created (For demo)
import myTour from './_demoData/myTour.js'
/**************************************************** */

const App = () => {
   const [tours, setTours] = useState(null);
   const [bookedTours, setBookedTours] = useState(null);
   const [currentTour, setCurrentTour] = useState(myTour);

   const [users, setUsers] = useState(null);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
   })
   const [loggedInUser, setLoggedInUser] = useState(null);
   const [currentUser, setCurrentUser] = useState(null);
   const [newUserData, setNewUserData] = useState(null);

   const [logonData, setlogonData] = useState(null);
   const [loggedIn, setLoggedIn] = useState(false);
   const [register, setRegister] = useState(false);
   const [messageText, setMessageText] = useState('');
   const [showMessageBar, setShowMessageBar] = useState(false);
   
   const [newPosting, setNewPosting] = useState(''); 
   const [postings, setPostings] = useState([]);

   const [newMessage, setNewMessage] = useState(''); 
   const [messages, setMessages] = useState([]);

   const [editProfile, setEditProfile] = useState({ name: '', aboutMe: '' });

   // const [type, setType] = useState('restaurants');
   // const [rating, setRating] = useState('');
 
   // const [coords, setCoords] = useState({});
   // const [bounds, setBounds] = useState(null);
 
   // const [weatherData, setWeatherData] = useState([]);
   // const [filteredPlaces, setFilteredPlaces] = useState([]);
   // const [places, setPlaces] = useState([]);
 
   // const [autocomplete, setAutocomplete] = useState(null);
   // const [childClicked, setChildClicked] = useState(null);
   // const [isLoading, setIsLoading] = useState(false);


   /**********************************************************************************************************************************************
   *  API ROUTES
   ***********************************************************************************************************************************************/
    const apiUserPath = 'http://localhost:5000/api/users';
    const apiTourPath = 'http://localhost:5000/api/tours'; 
    const apiBookedTourPath = 'http://localhost:5000/api/bookedTours';

   const getAllUsers = async () => {
      await axios.get(apiUserPath).then((res) => { setUsers(res.data); console.log(res.data); }).catch((err) => console.log(err));
   }
//need to modify this to retrieve data based on search criteria
   const getTours = async (currentUser) => {
      await axios.get(apiTourPath).then((res) => { setTours(res.data) }).catch((err) => { console.log(err); });
} 

const getBookedTours = async (currentUser) => { currentUser &&
   await axios.get(`${apiUserPath}/${currentUser._id}/bookedTours`).then((res) => { setBookedTours(res.data) }).catch((err) => { console.log(err); });
} 

   const postNewUser = async (newUser) => {
      await axios.post(apiUserPath, newUser).then((res) => { console.log(res.data); }).catch(err => {
         if (err.response.status === 400) {
            console.log(err.response.data)
            setMessageText(err.response.data)
            setShowMessageBar(true);
         }
      })
   }


   const postUserLogin = async (email) => {
      await axios.post(`${apiUserPath}/login`, email).then((res) => { setLoggedInUser(res.data); setCurrentUser(res.data); }).catch((err) => { console.log(err); });
   }

   const getPostings = async (currentTour) => {
      await axios.get(`${apiTourPath}/${currentTour._id}/comments`).then((res) => { setPostings(res.data) }).catch((err) => { console.log(err); });
   }

   //add New Posting
   const postNewPosting = async (currentTour, data) => {
      await axios.post(`${apiTourPath}/${currentTour._id}/comment`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }
 
   const postNewMessage = async (currentTour, data) => {
      await axios.post(`${apiBookedTourPath}/${currentTour._id}/messages`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }
  /**********************************************************************************************************************************************
   *  USE EFFECT
   ***********************************************************************************************************************************************/
   useEffect(() => {
      getAllUsers();
   }, [currentUser])


   useEffect(() => {
      postNewUser(newUserData);
   }, [newUserData])


   useEffect(() => {
      postUserLogin(logonData);
   }, [logonData])

   // get Tour COMMENT Posting Feed 
   useEffect(() => {
      getPostings(currentTour);
      console.log('getPostings');
   }, [currentTour]) 

   useEffect(() => {
      postNewPosting(newPosting);
   }, [newPosting])

   useEffect(() => {
      postNewMessage(newMessage);
   }, [newMessage])

 /////////////////////////////////////////
   useEffect(() => {
      getTours(currentUser); 
      console.log('gettours')
   }, [currentUser]) 

   useEffect(() => {
      getBookedTours(currentUser); 
      console.log('getBookedtours')
   }, [currentUser]) 
 
///////////////////////////////////////Maping useeffects 
// /////////////////////////////////////////////////////////////////setting current geolocation
//    useEffect(() => {
//       navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
//         setCoords({ lat: latitude, lng: longitude });
//       });
//     }, []);
  
//     useEffect(() => {
//       const filtered = places.filter((place) => Number(place.rating) > rating);
  
//       setFilteredPlaces(filtered);
//     }, [places,rating]);
  
//     useEffect(() => {
//       if (bounds) {
//         setIsLoading(true);
  
//         getWeatherData(coords.lat, coords.lng)
//           .then((data) => setWeatherData(data));
  
//         getPlacesData(type, bounds.sw, bounds.ne)
//           .then((data) => {
//             setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
//             setFilteredPlaces([]);
//             setRating('');
//             setIsLoading(false);
//           });
//       }
//     }, [coords, bounds, type]);

   /**********************************************************************************************************************************************
   *  EVENT HANDLERS
   ***********************************************************************************************************************************************/
   const handleLoginAvatarClick = () => {    // Banner component
      //alert('avatar click');
      setLoggedIn(false);
      setCurrentUser(null);
      setLoggedInUser(null);
   }


   const handleCloseMessageBar = () => {     // MessageBar component
      setShowMessageBar(false);
      setMessageText('');
   }


   const handleUserChange = (event) => {     // AppLogin
      event.persist();    // calling event.persis allows references to the event occur asyncronously
      setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
      console.log(newUser);
   }


   const handleUserSubmit = (event) => {     // AppLogin
      event.preventDefault();
      if (register) {
         setNewUserData(newUser);   // change triggers post new user actions
         setRegister(false);        // end registration mode
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
      } else {
         setlogonData({ email: newUser.email })   // change triggers user login actions
         setLoggedIn(true);
         setNewUser({
            name: '',
            email: '',
            password: '',
         });
         document.getElementById('app').style.backgroundColor = '#999999';
         //alert('submit form');
      }
   }
   const changeUser = (user) => {
      setCurrentUser(user)
      console.log('tempUser', currentUser)
   }
    
   const changeTour = (tour) => {
      setCurrentTour(tour)
      console.log('tempTour', currentTour)
   }

   /////////////////////////////////////////////////handle new COMMENT posting 
   const handleNewPostingSubmit = (event) => {
      event.preventDefault();
      const posting = {
         author: loggedInUser.name,
         feedback: newPosting,
      }
      postNewPosting(currentTour, posting);
      // console.log('New Post:', posting);
      // console.log('CurrentTour:', currentTour)
      // console.log('user id', loggedInUser._id)

      const newCurrentTour = { ...currentTour };
      newCurrentTour.comments.push(posting);
      setCurrentTour(newCurrentTour);
      setNewPosting('');
   }

   //handle new COMMENT posting change 
   const handleNewPostingChange = (event) => {
      setNewPosting(event.target.value);
   }


   const handleEditProfileChange = (event) => {
      event.persist();
      setEditProfile(prevEditProfile => ({ ...prevEditProfile, [event.target.name]: event.target.value }));

   }


   const handleEditProfileSubmit = (event) => {
      event.preventDefault();

      setEditProfile({
         name: '',
         aboutMe: ''
      });
   }

 ///////////////////////////////////////////////////handle new MESSAGE posting 
 const handleNewMessageSubmit = (event) => {
   event.preventDefault();
   const posting = {
      author: loggedInUser.name,
      post: newMessage,
   }
   postNewMessage(currentTour, posting);
    console.log('New message -------------Post:', posting);
   // console.log('CurrentTour:', currentTour)
   // console.log('user id', loggedInUser._id)

   const newCurrentTour = { ...currentTour };
   newCurrentTour.messages.push(posting);
   setCurrentTour(newCurrentTour);
   setNewMessage('');
}

//handle new COMMENT posting change 
const handleNewMessageChange = (event) => {
   setNewMessage(event.target.value);
}

////////////////////////////////////////////////////////////Mapping 
// const onLoad = (autoC) => setAutocomplete(autoC);

// const onPlaceChanged = () => {
//   const lat = autocomplete.getPlace().geometry.location.lat();
//   const lng = autocomplete.getPlace().geometry.location.lng();

//   setCoords({ lat, lng });
// };


   /////////////// CONSOLE.LOGS /////////////////
   console.log(users);
   console.log('current user: ', currentUser);
   console.log('loggedInUser: ', loggedInUser);
   console.log('currentTour: ', currentTour);
   console.log('currentTourcomments: ', currentTour.comments);

   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} 
         handleLoginAvatarClick={handleLoginAvatarClick} loggedInUser={loggedInUser} />
{/*
         {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} 
         handleCloseMessageBar={handleCloseMessageBar} messages={messages} setMessages={setMessages} newMessage={newMessage} 
         setNewMessage={setNewMessage} handleNewMessageChange={handleNewMessageChange} handleNewMessageSubmit={handleNewMessageSubmit}/>}
*/}  
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}

            {(loggedIn && currentUser )  && <Main changeTour={changeTour} changeUser={changeUser} users={users} 
            loggedInUser={loggedInUser} currentUser={currentUser} editProfile={editProfile} handleEditProfileChange={handleEditProfileChange} 
            handleEditProfileSubmit={handleEditProfileSubmit} handleNewPostingChange={handleNewPostingChange} handleNewPostingSubmit={handleNewPostingSubmit} 
            newPosting={newPosting} setNewPosting={setNewPosting} postings={postings} setPostings={setPostings} tours={tours} setTours={setTours} 
            bookedTours={bookedTours} setBookedTours={setBookedTours} currentTour={currentTour} setCurrentTour={setCurrentTour} 
            messages={messages} setMessages={setMessages} newMessage={newMessage} 
            setNewMessage={setNewMessage} handleNewMessageChange={handleNewMessageChange} handleNewMessageSubmit={handleNewMessageSubmit}
         
            // type={type} setType={setType} rating={rating} setRating={setRating} coords={coords} setCoords={setCoords} 
            // bounds={bounds} setBounds={setBounds} weatherData={weatherData} setWeatherData={setWeatherData} 
            // filteredPlaces={filteredPlaces} setFilteredPlaces={setFilteredPlaces} place={places} setPlaces={setPlaces}
            // autocomplete={autocomplete} setAutocomplete={setAutocomplete} childClicked={childClicked} setChildClicked={setChildClicked} 
            // isLoading={isLoading} setIsLoading={setIsLoading}

            />}
         </div> 
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
         {/* <Footer /> */} 
       
      </div>
   )
}


export default App;
