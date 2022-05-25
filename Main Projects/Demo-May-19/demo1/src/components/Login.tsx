import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { usersdata } from '../datas/datas'
import { actionCreators } from '../store'
import { demo } from '../store/action-creators'


const Login =() => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [mobile,setMobile] = useState("")
  const [password,setPassword]= useState("") 

  const [datas,setDatas] =useState("")
  const [useris,setUseris] = useState("")
  // const [state,setState] = useState({
  //   isLoading: true,
  //   users: [],
  //   error: null
  // });

 
  const AuthenticateLogin=()=>{
    usersdata.map((data)=>{
      authenticate(data.mobile,data.password,data.role);

    }) 
    

    if(useris ==  ""){
      console.log("it's not a user")
    }
    
  }

  const authenticate= (val1:string,val2:string,data:string)=>{
     if (val1 === mobile && val2 ===password)
     {
      setUseris(val1);
     // const demois = () =>{}
      
      // const valdemo =(useris:string) =>{
      //   dispatch(demo(useris))
      //   console.log("yes2");
      // };
      
      const { demo, demo1 } = bindActionCreators(actionCreators,dispatch);
      console.log(useris)
      demo(val1);
      demo1(data);

      
      console.log("user")
      // dispatch(demo(useris))
      debugger;

      navigate("/dashboard") 
        
     }
  }

  // const baseURL = "http://localhost:3000/users"
  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     debugger;
  //     setDatas(response.data);
  //     console.log(datas)
  //     datas.map((data)=>{
  //       authenticate(data.mobile,data.password);
  //     }) 
  //     console.log("as1")
      
  //   });
  // }, []);

  // React.useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((response) => {
  //     setUsers(response.data);
  //     console.log(users)
  //   });
  // }, []);

  return (
   <div className='body-signup'>
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center" id="h2-signup">Login Page</h2>
            <div className="card-body py-md-4">
              <form onSubmit={AuthenticateLogin}>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone" placeholder="Enter the mobile number" name="phone" onChange={(e)=>setMobile(e.target.value)} />
                </div>           
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Enter the Password" name="password"  onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="btn btn-secondary" onClick={()=>{navigate("/signup") }}>SignUp</a>
                  <button className="btn btn-primary" type="submit">Login</button>
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