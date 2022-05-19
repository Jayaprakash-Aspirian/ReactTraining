import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Dashborad from '../components/Dashboard';


const MainRoutes=() => {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Navigate replace to="dashborad"/>} />
            <Route path="dashboard" element={<Dashborad/>} />
                  
          </Routes>
      </div>
    )
  }
  
  export default MainRoutes;