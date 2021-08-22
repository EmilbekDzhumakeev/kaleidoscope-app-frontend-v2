import React from 'react' 

import './footer.css';
import '../../components/appLogin/appLogin.css'

const Footer = (props) => { 

 ///////////////////////////////////////////////////////////////////////
    return (
        

                <div className='app-login'>
         <div className='login-form'>

            
            <h3>Create Tour</h3>

            <form onSubmit={(event) => { props.handleTourSubmit(event) }}>
               {/* form fields */}
               {props.registerTour && <input type='text' name='tTitle' placeholder='Tour Title' onChange={props.handleTourChange} value={ props.newTour.tTitle } />}<br />
               <textarea type='text' name='description' placeholder='Description' required onChange={props.handleTourChange} value={ props.newTour.description } /><br />
               <input type='text' name='route' placeholder='City' required onChange={props.handleTourChange} value={props.newTour.route} />
               
               {/* login action bar */}
               <div className="login-action-bar">
               
                   { props.registerTour && <div><input type='submit' className='button-md' value='Submit' /><input type='submit' className='button-md' value='Cancel' /></div>}
                   {!props.registerTour && <button className="button-md register" onClick={() => { props.setRegisterTour(true) }}>Register</button>} 
                   </div>
            </form>
         </div>
      </div>

                   
        
    )
}

export default Footer


