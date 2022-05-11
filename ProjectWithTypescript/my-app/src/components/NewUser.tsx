import React from 'react'
import { Link } from 'react-router-dom'
import { UserType } from './Users'

const NewUser=()=> {

  const [newUserData,setNewUserData] = React.useState<UserType>({id:0,name:'',phone:'',email:'',website:''})
  console.log("a")

  const handleChange=(e:any)=> {
    const _newUserData={...newUserData} as any

    _newUserData[e.target.name] = e.target.value
    
    setNewUserData(_newUserData)

    console.log("handle change",e.target.value)
  }
  

  const handlePostData =(e:any)=>{
    console.log("new user data",newUserData)

    //post request for API

    alert("Data Posted Successfully")

  }

  return (
    <div className='new-user'>
      <Link to="/users" >Go back</Link>
      <h1>Add a new user</h1>
      <div className='new-user__form'>
        <div className="new-user__form-group">
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={handleChange} value={newUserData?.name} placeholder='Jhon Doe' />
        </div>
        <div className="new-user__form-group">
          <label htmlFor="">Phone</label>
          <input type="text" name="phone" onChange={handleChange} value={newUserData?.phone} placeholder='000000000' />
        </div>
        <div className="new-user__form-group">
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={handleChange} value={newUserData?.email} placeholder='abc@something.com' />
        </div>
        <div className="new-user__form-group">
          <label htmlFor="">Website</label>
          <input type="text" name="website" onChange={handleChange} value={newUserData?.website} placeholder='www.something.com' />
        </div>
        <div className="new-user__form-group">
          <button onClick={handlePostData}>Save your data</button>
        </div>
      </div>
    </div>
  )
}

export default NewUser