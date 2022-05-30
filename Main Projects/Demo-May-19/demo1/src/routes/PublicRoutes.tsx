import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { State } from '../store';

 
const useAuth=()=>{
    // const user = useSelector((state:State) => state.userdata);
    const user =localStorage.getItem("user")
    // const user = JSON.parse(userdetails)
    if(user){
      return true
    }
    else{
      return false;  
    } 
}

const PublicRoutes=(props:any)=> {
  const auth=useAuth()
  return (
    auth? <Navigate to="/dashboard"/> : <Outlet />
  )
}

export default PublicRoutes;