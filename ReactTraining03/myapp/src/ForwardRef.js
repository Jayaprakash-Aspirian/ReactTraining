import React, { Component } from 'react';
import Hello from './Hello';

export default class ForwardRef extends Component {
  buttonRef= new React.createRef();
  constructor(){
      super();
      this.state={
          name:'react'
      }
  }
  componentDidMount(){
      this.buttonRef.current.onclick =() =>alert("It works");
  }
  render() {
    return (
     <div>
         <Hello ref={this.buttonRef} name={this.state.name} />

         {/* demo3 */}
         {/* <Hello buttonReference={this.buttonRef} name={this.state.name} /> 
          */}
         <p>Forward Ref is working</p>
     </div>
    )
  }
}
