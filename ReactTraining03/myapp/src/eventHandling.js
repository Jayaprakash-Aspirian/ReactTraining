import { React,Component } from 'react';

class eventHandling extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"state using"
        }
    }

    changeName(){
        this.setState({
            name:"setState using"
        })
    }

    inputNameEvent(event){
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return(
            <div>
                Enter Your Name:<input type="text" value={this.state.name} onChange={(event)=>this.inputNameEvent(event)}/><br/>
                <button onClick={()=>this.changeName()}>Click Me</button>
                <h1>yes {this.state.name}</h1>
            </div>
        )
    }
}

export default eventHandling;