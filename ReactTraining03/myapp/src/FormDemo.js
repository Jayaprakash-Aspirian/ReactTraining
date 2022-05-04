import React, { Component } from 'react'

export default class FormDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      value:""
    }
    this.changeEvent=this.changeEvent.bind(this)
    this.submitForm=this.submitForm.bind(this)
  }
  changeEvent(event){
    this.setState({
      value:event.target.value
    })
  }
  submitForm(event){
    alert("Data Submited..."+"Your Name is : "+this.state.value)
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.submitForm}><hr /><br />
        <label>Name
          <input type="text" value={this.state.value} onChange={this.changeEvent}/>
        </label>
        <h3>Your name is : {this.state.value}</h3>
        <input  type="submit" value="submit"/>
      </form>
    )
  }
}
