import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const SignUp =() => {
  let navigate = useNavigate()
  return (
   <div className='body-signup'>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">Register Page</h2>
            <div className="card-body py-md-4">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Enter the Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter the Email" />
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Enter the Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="confirm-password" placeholder="Confirm-password" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter the Mobile Number" />
                </div> 
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/login") }}>Login</a>
                  <button className="btn btn-primary">Create Account</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default SignUp;