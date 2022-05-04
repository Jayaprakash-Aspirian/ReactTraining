import React from 'react'


// demo1
export default React.forwardRef((props,ref)=>{
    return (
        <div>
            <h1>Hello,</h1>
            <button ref={ref}>Click me</button>
        </div>
    )
}) 


// demo2
// const hello=(props,ref)=>{
//     return (
//         <div>
//             <h1>Hello,</h1>
//             <button ref={ref}>Click me</button>
//         </div>
//     )
// }

// export default React.forwardRef(hello);


// demo3
// const hello=(props)=>{
//     return(
//         <div>
//             <h1>Hello,</h1>
//             <Button ref={props.buttonReference} />
//         </div>
//     )
// };

// const Button =React.forwardRef((props,ref)=>{
//     return(
//         <button ref={ref} >Click me</button>
//     );
// });
// export default hello;
