import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup , login} from '../../config/firebase.js'

const Login = () => {
    const [currState, setCurrState] = useState("Sign up")
    const [UserName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        if(currState === "Sign up") {
            signup(UserName,email,password);
        }else{
            login(email,password)
        }

    }
    
    
return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
        <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{currState}</h2>
            {currState === "Sign up"?<input onChange={(e)=>setUserName(e.target.value)} value={UserName} type="text" className="form-input" required placeholder='UserName'/>:null}
            
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-input" placeholder='email' required />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="form-input" placeholder='password' required />
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