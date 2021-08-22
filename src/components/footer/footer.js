import React from 'react' 

import './footer.css';
import '../../components/appLogin/appLogin.css'

const Footer = (props) => { 
    //  ///////////////////////////////////////////////////////////////////////states
    // const [newTour, setNewTour] = useState({
       
    //     tTitle: '',
    //     description: '', 
    //     route:''
    //  })
    //  const [registerTour,setRegisterTour] = useState(false); 
    //  const [newTourData, setNewTourData] = useState(null);

//  ///////////////////////////////////////////////////////////////////////axios for footer
//  const apiTourPath = 'http://localhost:5000/api/tours'; 

//  const postNewTour = async (newTour) => {
//     await axios.post(apiTourPath, newTour).then((res) => { console.log(res.data); }).catch(err => {
//        if (err.response.status === 400) {
//           console.log(err.response.data)
       
//        }
//     })
//  }
// ///////////////////////////////////////////////////////////////////////useEffect for footer
// useEffect(() => {
//     postNewTour(newTourData);
//  }, [newTourData])

//  ///////////////////////////////////////////////////////////////////////event handlers 
//  const handleTourSubmit = (event) => {     // AppLogin
//     event.preventDefault();
//     if (registerTour) {
//        setNewTourData(postNewTour);   // change triggers post new user actions
//        setRegisterTour(false);        // end registration mode
//        setNewTour({
//         tTitle: '',
//         description: '', 
//         route:''
//        });
//     } 
//  } 
// ////////
// const handleTourChange = (event) => {     // AppLogin
//     event.persist();    // calling event.persis allows references to the event occur asyncronously
//     setNewTour(prevNewTour => ({ ...prevNewTour, [event.target.name]: event.target.value }));
//     console.log(newTour);
//  }
 ///////////////////////////////////////////////////////////////////////
    return (
        

                <div className='app-login'>
         <div className='login-form'>

            {!props.registerTour ? <h3>Search For Tour</h3> : <h3>Create Tour</h3>}

            <form onSubmit={(event) => { props.handleTourSubmit(event) }}>
               {/* form fields */}
               {props.registerTour && <input type='text' name='tTitle' placeholder='Tour Title' onChange={props.handleTourChange} value={ props.newTour.tTitle } />}<br />
               <textarea type='text' name='description' placeholder='Description' required onChange={props.handleTourChange} value={ props.newTour.description } /><br />
               <input type='text' name='route' placeholder='City' required onChange={props.handleTourChange} value={props.newTour.route} />
               
               {/* login action bar */}
               <div className="login-action-bar">
                   {!props.registerTour && <input type='submit' className="button-md login" value='Login' />}
                   { props.registerTour && <div><input type='submit' className='button-md' value='Submit' /><input type='submit' className='button-md' value='Cancel' /></div>}
                   {!props.registerTour && <button className="button-md register" onClick={() => { props.setRegisterTour(true) }}>Register</button>}</div>
            </form>
         </div>
      </div>

                   
        
    )
}

export default Footer


