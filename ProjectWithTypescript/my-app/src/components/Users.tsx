import React from 'react'

const Users=() => {
  const [users,setUsers] = React.useState([])

  React.useEffect(()=>{
      fetch('https://jsonplacaholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])

  return (
    <div>
       All users
    </div>
  )
}

export default Users;