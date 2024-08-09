import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {
    const [currState, setCurrState] = useState("Sign up")
    
    
return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
        <form className="login-form">
            <h2>{currState}</h2>
            {currState === "Sign up"?<input type="text" className="form-input" required placeholder='UserName'/>:null}
            
            <input type="email" className="form-input" placeholder='email' required />
            <input type="password" className="form-input" placeholder='password' required />
            <button type='submit'>{currState === "Sign up"?"Create account":"Login "}</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="login-forgot">
                {
                currState === "Sign up"?
                <p className="login-toggle">Alread have an account <span onClick={()=>setCurrState("Login")}>Login Here</span> </p>:
                <p className="login-toggle">Create an account <span onClick={()=>setCurrState("Sign up")}>Click Here</span> </p>
            }
            </div>
                
        </form>
    </div>
  )
}

export default Login