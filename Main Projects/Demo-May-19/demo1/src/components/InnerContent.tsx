import React from 'react'
import { Outlet } from 'react-router-dom'

const InnerContent=() =>{
  return (
    <div className="dashboard-change">
       <Outlet />  
    </div>
  )
}

export default InnerContent;