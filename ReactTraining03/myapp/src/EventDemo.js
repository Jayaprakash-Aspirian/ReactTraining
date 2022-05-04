import { React,Component } from 'react';

class EventDemo extends Component{
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
                <br/><hr /><br />
                Enter Your Data:<input type="text" value={this.state.name} onChange={(event)=>this.inputNameEvent(event)}/><br/><br />
                <button onClick={()=>this.changeName()}>reset</button>
                <h1>You Entered {this.state.name}</h1>
            </div>
        )
    }
}

export default EventDemo;