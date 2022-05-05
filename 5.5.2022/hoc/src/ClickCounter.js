import React,{useState} from 'react'
import DemoCounter from './DemoCounter';

// // Normal demo 
// const ClickCounter =() =>{
//     const [count,setCount]=useState(0)
//     const increment =()=>{
//         setCount(count+1)
//     }

//     return (
//         < >
//             <h1>ClickCounter</h1>
//             <button onClick={increment}>Clicked {count} times</button>
//         </>
//     )

// }

const ClickCounter =(props) =>{

    return (
        < >
            <h1>ClickCounter</h1>
            <button onClick={props.increment}>{props.name } Clicked {props.count} times</button>
            <DemoCounter {...props} />
        </>
    )

}
export default ClickCounter;


