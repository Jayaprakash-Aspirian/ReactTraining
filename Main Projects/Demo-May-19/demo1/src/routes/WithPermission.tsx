import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store'

type Props={
    roleRequired: 'ADMIN' |  'USER',
    message:string,
    children?:React.ReactNode
}
    

const WithPermission=(props : Props)=> {
  const user= useSelector((state:State) => state.userdata);
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