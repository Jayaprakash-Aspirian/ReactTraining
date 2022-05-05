import React, {useState } from 'react'

////Normal Demo
// const HoverCounter =()=> {
//     const [count,setCount] = useState(0)

//     const increment =()=>{
//         setCount(count+1)
//     }

//     return (
//         < >
//             <h1>Hover here</h1>
//             <button onMouseOver={increment}>Hovered {count} times</button>
//         </>
//     )
// }

const HoverCounter =(props) =>{

    return (
        < >
            <h1>HoverCounter</h1>
            <button onMouseOver={props.increment}>Hovered {props.count} times</button>
        </>
    )

}

export default HoverCounter;
