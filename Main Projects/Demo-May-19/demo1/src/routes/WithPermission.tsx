import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store'

type Props={
    roleRequired: 'ADMIN' |  'USER',
    message:string,
    children?:React.ReactNode
}
  

const useRole=()=>{
  let user: any
  const userdetails =localStorage.getItem("user")
  if(userdetails){
    user = JSON.parse(userdetails)
  }
  if (user){
    return user.role
  }
  else{
    return "No USER";
  }
}




const WithPermission=(props : Props)=> {
  // const user= useSelector((state:State) => state.userdata);
  // const userdetails : any=localStorage.getItem("user")

  const {roleRequired,message,children} =props
  const role = useRole()
   
  return (
    <>
    {
      roleRequired === role ? children :<h3>{message ? message: ''}</h3>
    }
    </>
  )
}

export default WithPermission;