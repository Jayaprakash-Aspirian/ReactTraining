import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login =() => {
  const navigate=useNavigate()

  return (
   <div className='body-signup'>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">Login Page</h2>
            <div className="card-body py-md-4">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone" placeholder="Enter the mobile number" />
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Enter the Password" />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/signup") }}>SignUp</a>
                  <button className="btn btn-primary">Login</button>
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

export default Login;