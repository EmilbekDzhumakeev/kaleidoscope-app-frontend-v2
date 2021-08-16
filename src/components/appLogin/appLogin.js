import React from 'react';
import './appLogin.css';


const AppLogin = (props) => {
   return (
      <div className='app-login'>
         <div className='login-form'>
            {!props.register ? <h3>Login</h3> : <h3>Registration</h3>}

            <form onSubmit={(event) => { props.handleUserSubmit(event) }}>
               {/* form fields */}
               {props.register && <input type='text' name='name' onChange={props.handleUserChange} value={ props.newUser.name } required placeholder='Full Name' />}<br />
               <input type='email' name='email' placeholder='Email' required onChange={props.handleUserChange} value={ props.newUser.email } /><br />
               <input type='password' name='password' placeholder='Password' required onChange={props.handleUserChange} value={props.newUser.password} />
               
               {/* login action bar */}
               <div className="login-action-bar">{!props.register && <input type='submit' className="button-md login" value='Login' />}{props.register && <div><input type='submit' className='button-md' value='Submit' /><input type='submit' className='button-md' value='Cancel' formNoValidate /></div>}{!props.register && <button className="button-md register" onClick={() => { props.setRegister(true) }}>Register</button>}</div>
            </form>
         </div>
      </div>
   )
}

export default AppLogin;
