import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersdata } from '../datas/datas'

const Login =() => {
  
  // const baseURL = "http://localhost:3000/users/"
  const [mobile,setMobile] = useState("")
  const [password,setPassword]= useState("") 
  
  const [users,setUsers] = useState([])
  const [state,setState] = useState({
    isLoading: true,
    users: [],
    error: null
  });
 
  const AuthenticateLogin=()=>{
   
    // useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     const datas = {mobile,password}
    //     console.log(datas)
    //     console.log(response)
    //     console.log(response.data)
    //   });
      
    // }, []);

  //   getFetchUsers() {
  //     this.setState({
  //         loading: true
  //     }, () => {
  //         fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
  //             loading: false,
  //             users: result
  //         })).catch(console.log);
  //     });
  // }

  //   setState({
  //    loading : true
  //   },()=>{
  //     fetch("http://localhost:3000/users").then(res =>res.json()).then(result => setState({
  //       loading:false,
  //       users:result
  //       })).catch(console.log)
  //     }))
  //   })

  //   fetch("http://localhost:3000/users").then(res => res.json()).then(result => setState({
  //     setUsers = result
  // })).catch(console.log);
 
    const user = { mobile: mobile };

    
  
  }
  React.useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
      console.log(users)
    });
  }, []);


  const navigate=useNavigate()
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