import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'

import Dashborad from './components/Dashborad';
import InnerContent from './components/InnerContent';
import Tabs from './components/Tabs';
import Login from './components/Login';
import Settings from './components/Settings';
import Users from './components/Users';
import NewUser from './components/NewUser';
import SingleUser from './components/SingleUser';

import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';


const MainRoutes=() => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />} >
            <Route path="/" element={<InnerContent />} >
                <Route path="/" element={<Navigate replace to="dashborad"/>} />
                <Route path="dashboard" element={<Dashborad />} />
                <Route path="tabs" element={<Tabs/>} >
                    <Route path="/tabs" element={<Navigate replace to="tab1"/>} />
                    <Route path="tab1" element={<Tab1 />} />
                    <Route path="tab2" element={<Tab2 />} />
                    <Route path="tab3" element={<Tab3 />} />
                </Route>
                <Route path="settings" element={<Settings />} />

                <Route path="users" element={<Users />} />
                <Route path="users/:userId" element={<SingleUser />} />
                <Route path="users/new" element={< NewUser/>} />
                

            </Route>
          </Route>

          <Route path="login" element={<PublicRoutes />} >
            <Route path="/login" element={<Login />} />
          </Route>

        </Routes>
    </div>
  )
}

export default MainRoutes;