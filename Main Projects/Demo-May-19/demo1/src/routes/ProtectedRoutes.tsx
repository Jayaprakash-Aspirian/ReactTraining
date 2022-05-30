import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { State } from '../store';


const useAuth=()=>{
   
  // const user = useSelector((state:State) => state.userdata);
  const userdetails : any=localStorage.getItem("user")
  let user:any  
  console.log(user.role)

  if(userdetails){
    user= JSON.parse(userdetails)
  }
  if (user){
    return{
      auth:true,
      role:user.role,
    }
  }
  else{
    return{
      auth:false,
      role:null,
    }
  }
  
}


type ProtectedRouteType = {
  roleRequired ? : 'ADMIN' | 'USER'
}

const ProtectedRoutes=(props:ProtectedRouteType) => {
  const {auth,role}=useAuth()
  if(props.roleRequired){
    return auth ? ( props.roleRequired === role ?  ( <Outlet/> ) :  ( <Navigate to="/denied" /> ) ) : (<Navigate to="/login" /> )
  }
  else{
    return auth ?  <Outlet/> : <Navigate to="/login" />
  } 
}

export default ProtectedRoutes;