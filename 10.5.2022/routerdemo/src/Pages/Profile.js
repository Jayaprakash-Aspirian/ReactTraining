import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Profile() {
  let navigate =useNavigate();
  let { username } =useParams();
  return (
    <div>
        Profile page for {username}!
        <button onClick={()=>navigate("/about")}>About</button>
    </div>
  )
}

export default Profile; 