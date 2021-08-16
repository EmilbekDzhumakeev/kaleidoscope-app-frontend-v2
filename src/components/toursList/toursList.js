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
   const buttonText = toggle ? 'All Tours' : 'Booked ';  // change button text on toggle
   
   return (
      <div className='friends-all-users-list'> 
      <button className="button-md toggle-button" onClick={() => { changeDisplay()}}>{buttonText}</button>
        {toggle && <BookedToursList currentUser={props.currentUser}  changeUser={props.changeUser} tours={props.tours} setTours={props.setTours} />}
        {!toggle && <AllToursList currentUser={props.currentUser} changeUser={props.changeUser} users={props.users} />}
       
      </div>
   )
}

export default ToursList
