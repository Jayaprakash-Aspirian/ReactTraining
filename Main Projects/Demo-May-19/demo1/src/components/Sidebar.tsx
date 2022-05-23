import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import MainRoutes from '../routes/MainRoutes'


const Sidebar=() => {
  
  const location= useLocation()

  return (

        <>
            <div className="col-lg-3 my-lg-0 my-md-1" id="sidebar-change">
                <div id="sidebar" className="bg-purple">
                    <div className="h4 text-white">Account</div>
                    <ul>
                      <Link to="/dashboard"  style={{ textDecoration: 'inherit', color:'white'}}>
                        <li className={location.pathname.includes ("/dashboard") ?'active':''} > <div className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-box pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Account</div>
                                    <div className="link-desc">Dashboard</div>
                                </div>
                            </div> </li>
                      </Link>
                      <Link to="/userslist" style={{ textDecoration: 'inherit', color:'white'}}>
                        <li className={location.pathname==='/userslist'?'active':''}> <div className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-address-book pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Users List</div>
                                    <div className="link-desc">Sent Money & Get Moeny</div>
                                </div>
                            </div> </li>
                      </Link>
                      <Link to="/profile" style={{ textDecoration: 'inherit', color:'white'}}>
                        <li className={location.pathname==='/profile'?'active':''}> <div className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-user pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Profile</div>
                                    <div className="link-desc">Change your profile details & password</div>
                                </div>
                            </div> </li>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'inherit', color:'white'}}>
                        <li className={location.pathname==='/contact'?'active':''} > <div className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-headset pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Help & Support</div>
                                    <div className="link-desc">Contact Us for help and support</div>
                                </div>
                            </div> </li>
                        </Link>
                    </ul>
                </div>
            </div>
        <Outlet />
        </>
  )
}

export default Sidebar;