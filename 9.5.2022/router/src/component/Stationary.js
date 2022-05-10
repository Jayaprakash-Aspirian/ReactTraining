import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { getItems } from '../datas';

export default class Stationary extends Component {
  constructor(props){
      super(props)
      let invoices = getItems();
      // this.state={
      //     items:["Pen","Pencil","Paper"]
      // }
      this.state={invoices}

  }
  render() {
    const dataItems=this.state.invoices.map((item)=>{
        return <Link to={`/shop/${item.name}`}><li>{item.name}</li></Link>

    })
    return (
      <div>{dataItems}</div>
      
    )
  }
}
