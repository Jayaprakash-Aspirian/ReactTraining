import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store'

type Props={
    roleRequired: 'ADMIN' |  'USER',
    message:string,
    children?:React.ReactNode
}


// const useRole=()=>{
  
//     let user: any
    
//     const _user = useSelector((state:State) => state.userdata);
  
//     if(_user){
//       user = JSON.parse(_user)
//     }
  
//     if (user){
//       return user.role
//     }
//     else{
//       return 'USER'
//     }
//   }
  
  

const WithPermission=(props : Props)=> {
  const user= useSelector((state:State) => state.userdata);
  console.log(user)
  const {roleRequired,message,children} =props
   

  return (
    <>
    {
        user ? children :<h3>{message ? message: ''}</h3>
    }
    
    </>
  )
}

export default WithPermission;