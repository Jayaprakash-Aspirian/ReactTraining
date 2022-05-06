import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
      super(props);
      this.state ={
          count:0
      }
  }

  incrementCount =() => {
      this.setState(prevState =>{
          return { count: prevState.count +1 }
      })
  }

  
  render() {
    return (
      <div>
         <h2>Counter :</h2> 

          {/* demo1 */}
          {this.props.render(this.state.count,this.incrementCount)}

          {/* demo2 */}
          {/* {this.props.children(this.state.count,this.incrementCount)} */}
      </div>
    )
  }
}
