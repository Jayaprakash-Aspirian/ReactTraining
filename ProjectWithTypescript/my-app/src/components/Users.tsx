import React from 'react'
import { Link } from 'react-router-dom'


export type UserType={
  id:number,
  name:string,
  email:string,
  phone:string,
  website:string,
  // address:{},
  // company:{}
}

type UsersType=Array<UserType>


const Users=(props:any) => {
  const [users,setUsers] = React.useState<UsersType>([])

  React.useEffect(()=>{
      console.log(props);

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  },[])

  return (
    <div className='users'>
      <h1>To add new users:</h1>
      <Link to="/users/new">Add a new user</Link>
      <hr /><br />
      <h1>All Users :</h1>

      <div className='users__list'>
        {
          users && users.map((user)=>(

            <div className='users__card' key={user.id}>

              <Link to={`/users/${user.id}`}> <p>Name: <span className='users-name'>{user.name}</span></p> </Link>
              {/* <p>Email:<span className='normal'>{user.email}</span></p> */}
              {/* <p>Phone:<span className='normal'>{user.phone}</span></p>
              <p>Website:<span className='normal'>{user.website}</span></p> */}

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Users;