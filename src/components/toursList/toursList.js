import  {useState} from 'react'
import BookedToursList from './allBookedToursList/allBookedToursList'; 
import AllToursList from './allToursList/allToursList'
import './toursList.css';

const ToursList = (props) => { 
   const [toggle, setToggle] = useState(true);
   
   const changeDisplay = () => {
      setToggle (!toggle)
      console.log(toggle)
   }
   const buttonText = toggle ? 'All Users' : 'Friends';  // change button text on toggle
   
   return (
      <div className='friends-all-users-list'> 
      <button className="button-md toggle-button" onClick={() => { changeDisplay()}}>{buttonText}</button>
        {toggle && <BookedToursList currentUser={props.currentUser} setFriends={props.setFriends} changeUser={props.changeUser} friends={props.friends} />}
        {!toggle && <AllToursList currentUser={props.currentUser} changeUser={props.changeUser} users={props.users} />}
       
      </div>
   )
}

export default ToursList
