import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { State } from '../store';


const useAuth=()=>{
   
  let user: any
  
//   const _user =localStorage.getItem("user")
 
  const _user = useSelector((state:State) => state.userdata);
  const _role = useSelector((state:State) => state.userrole);

  if(_user){
    user = JSON.parse(_user)
    // user=_user
    console.log("user",user)
  }

  if (user){
    return{
      auth:true,
      role:_role,
    }
  }
  else{
    return{
      auth:false,
      role:null,
    }
  }
}


//protected Route state

type ProtectedRouteType = {
  roleRequired ? : 'ADMIN' | 'USER'
}


const ProtectedRoutes=(props:ProtectedRouteType) => {

  const {auth,role}=useAuth()

  //if the role required is there or not

  if(props.roleRequired){
    return auth ? ( props.roleRequired === role ?  ( <Outlet/> ) :  ( <Navigate to="/denied" /> ) ) : (<Navigate to="/login" /> )
  }
  else{
    return auth ?  <Outlet/> : <Navigate to="/login" />
  }
  
}

export default ProtectedRoutes;