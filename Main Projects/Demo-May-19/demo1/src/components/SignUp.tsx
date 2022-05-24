import React from 'react'
import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

type State = {
  firstname: string,
  lastname: string,
  email: any,
  passwrord: any,
  confirmpassword:any
};

const SignUp =() => {
  const [firstname,setFName] = useState("")
  const [lastname,setLName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("") 
  console.log("As11")
  const[confirmpassword,setConfirmpassword]=useState("")

  const SubmitForm=()=>{
    console.log("As1")

    console.log("As2")
    console.log(firstname)
    console.log("As3")
    let datas={"firstname":firstname,"lastname":lastname,"email":email,"password":password};
    console.log("yes1")
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datas)
      
    })
    console.log("yes")
    
  }

  let navigate = useNavigate()
  return (
   <div className='body-signup' >
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">Register Page</h2>
            <div className="card-body py-md-4">
              
                <div className="form-group">
                  <input type="text" className="form-control" id="firstname" placeholder="Enter the First Name" required/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="lastname" placeholder="Enter the Last Name" required/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter the Email" required/>
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Enter the Password" required/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm-password" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter the Mobile Number" />
                </div> 
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/login") }}>Login</a>
                  <button className="btn btn-primary" onClick={SubmitForm} >Create Account</button>
                </div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default SignUp;