import React, { useState } from 'react'
import Booktable from './Booktable';
import { Link } from 'react-router-dom';

function Login() {
  const [username,Setusername]=useState("");
  const [password,Setpassword]=useState("");
  const [message , setmessage] = useState(" ");

function handlelogin(){
    let validusername='user'
    let validpassword='1234'
    if(validusername === username && validpassword === password){
      setmessage('Login Success ✅');
    } else {
      setmessage('Invalid credentials ❌');
    }
    }
  return (
    
        <div className="login-container">
      <div className="login-content">
        <h1>Welcome to Tasty Time</h1>
        <p>Please log in to continue</p>
        <form>
          <input type="text" onChange={(e)=>Setusername(e.target.value)} value={username} placeholder="Username" /><br />
          <input type="password" onChange={(e)=>Setpassword(e.target.value)} value={password} placeholder="Password" /><br />
          <button id='btn' 
            onClick={handlelogin}
          >Login</button>
        </form>
         {message && <p style={{fontWeight:'bold'}}>{message}</p>}
      </div>
    </div>
  )
}

export default Login