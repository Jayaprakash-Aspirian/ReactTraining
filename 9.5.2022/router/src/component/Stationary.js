import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Stationary extends Component {
  constructor(props){
      super(props)
      this.state={
          items:["Pen","Pencil","Paper"]
      }
  }
  render() {
    const dataItems=this.state.items.map((item)=>{
        return <Link to={`/shop/${item}`}><li>{item}</li></Link>

    })
    return (
      <div>{dataItems}</div>
      
    )
  }
}
