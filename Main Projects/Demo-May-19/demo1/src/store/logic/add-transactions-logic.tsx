import axios from "axios";
import { createLogic } from "redux-logic";
import { allTransactionsData } from "../../services/services-data";

import { ADD_TRANSACTIONS_ACTIVITY,getActivityUsersData,ADD_USERS_ACTIVITY, CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY, addTransactionsData, ADD_TRANSACTIONS, ADD_TRANSACTIONS_CANCEL, rejecttransactionsData } from "../activity.actions";

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
export const transactionsAddLogic = createLogic({
    type: addTransactionsData,
    latest: true, 
  
    process({ action }) {
        console.log("work")
        console.log(action.payload)
        console.log("works")  
    }
  });