//import LikesBar from '../../timeline/userPost/likesBar/likesBar';
import './userMessage.css';

const UserMessage = (props) => {
   return (
      <div className='user-post'>
         <p>
            <span>{`${props.userMessage.author} >>`}&nbsp;&nbsp;</span>{props.userMessage.post}<i><b>    Date Added:{props.userMessage.dateAdded
}</b></i></p>
         <div> 
             {/*
            <LikesBar userMessage={props.post} /><button className="button-sm">Remove</button>
             */}
            </div>
      </div>
   )
}

export default UserMessage;