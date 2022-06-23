import axios from "axios";
import { applyMiddleware } from "redux";
import { createLogic } from "redux-logic";
import { allTransactionsData,addingTransactionsData } from "../../services/services-data";
import { ADD_TRANSACTIONS_ACTIVITY,getActivityUsersData,ADD_USERS_ACTIVITY, CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY, addTransactionsData, rejecttransactionsData, FULLFILLED_ADD_TRANSACTIONS_ACTIVITY, REJECTED_ADD_TRANSACTIONS_ACTIVITY, CANCEL_ADD_TRANSACTIONS_ACTIVITY } from "../activity.actions";



// export const transactionsAddLogic = createLogic({
//   type: addTransactionsData ,
//   latest: true,
// //   validate({ getState, action:getActivityUsersData }, allow, reject) {
// //     if (action.payload) {
// //       allow(action);
// //     } else {
// //       // empty request, silently reject
// //       reject();
// //     }
// //   },

// //   processOptions: {
// //     dispatchReturn: true,
// //     successType: FULLFILLED_GET_TRANSACTIONS_ACTIVITY,
// //     failType:REJECTED_GET_TRANSACTIONS_ACTIVITY ,
// //   },

//   // async process() {
//   //   const users = await axios
//   //     .get("http://localhost:3000/transaction-history/")
//   //     .then((resp) => resp.data);
//   //   return users;
//   // },

//   process({action}) {
//     console.log("o1")
//     console.log(action.payload)
//     console.log("o2")
//     // const transactions = allTransactionsData().then((resp) => resp.data)
//     // return transactions;
//   },
// });

// export const transactionsAddLogic = createLogic({
//     type: ADD_TRANSACTIONS_ACTIVITY,
//     latest: true, 
//     async process({ action }) {
//         console.log("work")
//         console.log(action)
//         console.log("works")  
//     }                                                                               
    
// });
////////
// export const transactionsAddLogic = createLogic({
//   type: ADD_TRANSACTIONS_ACTIVITY,
// //   cancelType: CANCEL_GET_TRANSACTIONS_ACTIVITY,
//   latest: true,

//   process({action}){
//         console.log("work")
//         console.log(action)
//         console.log("works")  
//   }
// });

export const transactionsAddLogic = createLogic({
  type:ADD_TRANSACTIONS_ACTIVITY,
  // cancelType: CANCEL_ADD_TRANSACTIONS_ACTIVITY,
  latest: true,

  // processOptions: {
  //   dispatchReturn: true,
  //   successType: FULLFILLED_ADD_TRANSACTIONS_ACTIVITY,
  //   failType:REJECTED_ADD_TRANSACTIONS_ACTIVITY ,
  // },

  // validate({getState,action},allow,reject){
  //   console.log("called validate")
  //   console.log(action)
  // }

  process({getState, action},dispatch,done) {
    const transactions = allTransactionsData().then((resp) => resp.data)
    console.log("works")
    console.log(action)
    
    console.log("it's working")
    addingTransactionsData(action)
    return transactions;
  },
});


