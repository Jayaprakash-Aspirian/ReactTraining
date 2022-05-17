// import axios from 'axios';
// import { createLogic } from 'redux-logic';


// const Bankrupt = createLogic({
//     type: "bankrupt", 
//     cancelType: "bankrupt", 
//     latest: true, 
//     process({ }, dispatch, done) {
//       axios.get('http://localhost:3000/')
//         .then(resp => resp.data.amount)
//         .then(amount => dispatch({ 
//           type: "bankrupt_success",
//           payload: amount 
//         }))
//         .catch(err => {
//                console.error(err); 
//                dispatch({ 
//                 type: "deposit_failed", 
//                 payload: err,
//                 error: true 
//         })
//         })
//         .then(() => done());
//     }
//   });

//   export default Bankrupt;