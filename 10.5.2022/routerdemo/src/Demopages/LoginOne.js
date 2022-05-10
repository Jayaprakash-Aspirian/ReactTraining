import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginOne() {
  let navigate = useNavigate();
  return (
    <div>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button onClick={()=>{navigate("/profile")}}>Login</button>
    </div>
  )
}

export default LoginOne;