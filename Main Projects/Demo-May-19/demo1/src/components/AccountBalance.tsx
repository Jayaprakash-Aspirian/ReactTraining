import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { State } from '../store'
import Welcome from './Welcome'

const AccountBalance=() => {
  
  const user = useSelector((state:State) => state.userdata)

  


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
       
            <div className="order my-3 bg-light">
                <br />
                <div className="row">
                  
                    <div className="col-lg-4">
                      
                        <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div > Account Balance : </div>
                        </div>
                
                    </div>
                 
                    
                </div>
            </div>
        
        </div> 
    
     </div>
   </>
  )
}

export default AccountBalance