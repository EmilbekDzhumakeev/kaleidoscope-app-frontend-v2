import React, { useState, useEffect } from 'react'
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
   const [editProfile, setEditProfile] = useState({ name: '', aboutMe: '' });




   /**********************************************************
    *  API ROUTES
    **********************************************************/
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

const getBookedTours = async (currentUser) => {
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

   /**********************************************************
    *  USE EFFECTS
    **********************************************************/
   useEffect(() => {
      getAllUsers();
   }, [currentUser])


   useEffect(() => {
      postNewUser(newUserData);
   }, [newUserData])


   useEffect(() => {
      postUserLogin(logonData);
   }, [logonData])

   // get Tour Posting Feed 
   useEffect(() => {
      getPostings(currentTour);
      console.log('getPostings');
   }, [currentTour]) 

   useEffect(() => {
      postNewPosting(newPosting);
   }, [newPosting])

 /////////////// get User Friens ??????????????????????
   useEffect(() => {
      getTours(currentUser); 
      console.log('gettours')
   }, [currentUser]) 

   useEffect(() => {
      getBookedTours(currentUser); 
      console.log('getBookedtours')
   }, [currentUser]) 
 

   /**********************************************************
   *  EVENT HANDLERS
   ***********************************************************/
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

   //handle new posting 
   const handleNewPostingSubmit = (event) => {
      event.preventDefault();
      const posting = {
         author: loggedInUser.name,
         feedback: newPosting,
      }
      postNewPosting(currentTour, posting);
      console.log('New Post:', posting);
      console.log('CurrentTour:', currentTour)
      console.log('user id', loggedInUser._id)

      // Ally, state variables are immunable. if you use the push method on them, changing will not trigged React to re-render the DOM. Thus no screen updates after change
      // const allPosts = [...postings];
      // allPosts.push(posting);
      const newCurrentTour = { ...currentTour };
      newCurrentTour.comments.push(posting);
      setCurrentTour(newCurrentTour);
      setNewPosting('');
   }

   //handle new posting change 
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




   /////////////// CONSOLE.LOGS /////////////////
   console.log(users);
   console.log('current user: ', currentUser);
   console.log('loggedInUser: ', loggedInUser);
   console.log('currentTour: ', currentTour);
   console.log('currentTourcomments: ', currentTour.comments);

   return (
      <div id='app' className='App'>
         <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} handleLoginAvatarClick={handleLoginAvatarClick} loggedInUser={loggedInUser} />
         {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
         <div className='content'>
            {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit}
               register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}

            {(loggedIn && currentUser )  && <Main changeTour={changeTour} changeUser={changeUser} users={users} loggedInUser={loggedInUser} currentUser={currentUser} editProfile={editProfile} handleEditProfileChange={handleEditProfileChange} handleEditProfileSubmit={handleEditProfileSubmit} handleNewPostingChange={handleNewPostingChange} handleNewPostingSubmit={handleNewPostingSubmit} newPosting={newPosting} setNewPosting={setNewPosting} postings={postings} setPostings={setPostings} tours={tours} setTours={setTours} bookedTours={bookedTours} setBookedTours={setBookedTours} currentTour={currentTour} setCurrentTour={setCurrentTour}/>}
         </div>
         {/* <Footer /> */}
      </div>
   )
}


export default App;
