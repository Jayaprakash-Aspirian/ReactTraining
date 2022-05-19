import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar=() => {
  return(
    <div className='sidebar'>
        <div className='sidebar__items'>    
            <>
            <h1>OKay</h1>
        
            <Link to="/dashboard">Dashboard</Link>

            </>
        </div>
    </div>
  )
}

export default Sidebar;
