import {React,Component} from 'react';
import EventDemo from './EventDemo';

class ConditionalRendering extends Component{
    render(){
        let user="Admin";
        let LayoutIs=null
        if(user==="Admin")
            LayoutIs=<div style={{color:'red'}}><h1>Loginned as Admin</h1></div>
        else
            LayoutIs=<div style={{color:'red'}}><h1>Loginned as Normal User</h1></div>
        return(
            <div>
                {LayoutIs}
                <EventDemo />
            </div>
        )

    }
}

export default ConditionalRendering;