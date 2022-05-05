import React from 'react'

const DemoCounter =(props) =>{

    return (
        < >
            <h1>DemoCounter</h1>
            <button onClick={props.increment}>{props.name } Demo Clicked {props.count} times</button>

        </>
    )

}
export default DemoCounter;
