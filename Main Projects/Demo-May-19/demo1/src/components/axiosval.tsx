import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';



const datas = axios.get("http://localhost:3000/users/").then((response) => {
  console.log(response.data)
  return response.data;
});


const userdatas = ()=> {
  const dispatch = useDispatch()
  const[data,setData] = useState<any>([])
  const baseURL= "http://localhost:3000/users/";
  axios.get(baseURL).then((response) => {

    setData(response.data)
    // dispatch(UserDetails())
    console.log(response.data)
  })
  .catch(err=>{
      console.log(err)
  })
}



export default userdatas;