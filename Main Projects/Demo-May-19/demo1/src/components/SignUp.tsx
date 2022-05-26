import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useNavigate } from 'react-router-dom'

type State = {
  firstname: string,
  lastname: string,
  email: any,
  passwrord: any,
  confirmpassword:any,
  mobile:string
};

const SignUp  =() => {
  const [firstname,setFName] = useState("")
  const [lastname,setLName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("") 
  const[confirmpassword,setConfirmpassword]=useState("")
  const [mobile,setMobile] = useState("")
  const { t } = useTranslation()
  

  const SubmitForm=()=>{
   
    debugger;
    const datas={"firstname":firstname,"lastname":lastname,"email":email,"password":password,"mobile":mobile};
    console.log(datas)
    const a=JSON.stringify(datas)
    console.log(a);
    const axios = require('axios');
    axios.post('http://localhost:3000/users', {
      firstname:" Ara",
      lastname :"a",
      email:"kumar12@gmailcom",
      password: "asdfghjk",
      mobile : "63824097890"
    }).then((resp:any)=> {
      console.log(resp.data);
    }).catch((error:any) => {
      console.log(error);
    });
   
  }

  let navigate = useNavigate()
  return (
   <div className='body-signup' >
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">{t('register_message')}</h2>
            <div className="card-body py-md-4">
              <form onSubmit={SubmitForm}>
                <div className="form-group">
                  <input type="text" className="form-control" id="firstname" placeholder="Enter the First Name" onChange={(e)=>setFName(e.target.value)} required/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="lastname" placeholder="Enter the Last Name" onChange={(e)=>setLName(e.target.value)} required/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter the Email" onChange={(e)=>setEmail(e.target.value)} required/>
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Enter the Password" onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm-password" onChange={(e)=>setConfirmpassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter the Mobile Number" onChange={(e)=>setMobile(e.target.value)}/>
                </div> 
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/login") }}>Login</a>
                  <button className="btn btn-primary"  type="submit">Create Account</button>
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