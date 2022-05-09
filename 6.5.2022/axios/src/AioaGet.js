import React, { Component } from 'react'
import axios from 'axios'

export default class AioaGet extends Component {
  render() {
    return (
        axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
            document.write(JSON.stringify(data));
        }).catch((err)=>{console.log("error occured")})
      
    )
  }
}
