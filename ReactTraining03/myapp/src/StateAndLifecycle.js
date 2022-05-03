import React,{Component} from 'react'

export default class StateAndLifecycle extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timer= setInterval(
        () => this.CreateNewState(),
        1000
      );
    }

    componentWillUnmount(){
      clearInterval(this.timer)
    }
    CreateNewState() {    
        this.setState({      
            date: new Date()    
        });  
    }

    render() {
      return (
        <div>
          <h1>Current Time</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         
          <button onClick={this.componentWillUnmount.bind(this)}>Stop Timer</button>
          
        </div>
      );
    }
  }


