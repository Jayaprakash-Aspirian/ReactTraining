import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { State } from '../store';
import Welcome from './Welcome';

const Dashboard=() => {
  
  const value = useSelector((state:State) => state.userdata)

  const role = useSelector((state:State) => state.userrole)
  console.log("As"+role +"As");

  return (
   <>
    <div className="dashboard-change">
        <div id="main-content" className="bg-white border">
            <Welcome />
            <br />
{/*       
            <div className="d-flex my-4 flex-wrap">
                <div className="box me-4 my-1 bg-light" >  
                    
                    <div className="d-flex align-items-center mt-2">
                        <div className="tag">Total Schools</div>
                        <div className="ms-auto number"></div>
                    </div>
                </div>
            </div> */}
  
            <div className="text-uppercase">Account</div>
       
            <div className="order my-3 bg-light" >
                <br />
                <div style={{display:'flex',flexDirection:'column'}} >
                  
                    <div className="col-lg-4" style={{width:'20%'}}>
                      <Link to="accountbalance"  style={{ textDecoration: 'inherit', color:'white'}}  >
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div className="btn btn-primary text-uppercase">View Account Balance</div>
                        </div>
                      </Link>
                    </div>
                     
                
                    <div className="col-lg-4" style={{width:'20%'}}>
                      <Link to="promotions"  style={{ textDecoration: 'inherit', color:'white'}}>
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div className="btn btn-primary text-uppercase">Promotions Deatails   </div>
                        </div>
                      </Link>
                    </div>
                
                    
                    <div className="col-lg-4" style={{width:'20%'}}>
                      <Link to="transactions"  style={{ textDecoration: 'inherit', color:'white'}}>
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div className="btn btn-primary text-uppercase">Show Transaction History</div>
                        </div>
                      </Link>
                    </div>
                    
                </div>
              
            </div>
            <Outlet />
            

        </div> 
    
    </div>
   </>
  )
}

export default Dashboard;