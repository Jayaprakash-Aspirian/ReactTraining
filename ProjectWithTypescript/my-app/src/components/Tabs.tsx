import React from 'react'
import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';

const Tabs=()=> {
  return (
        <div className='tabs'>
            <h1>Tabs demo page</h1>

            {/* Tab navigation */}
            <TabNav />

            {/* Tab inner content */}
            <Outlet />
            
        </div>
  )
}

export default Tabs;