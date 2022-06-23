import { addTransactionsData, ADD_TRANSACTIONS_ACTIVITY, SIGNUP_DATA } from "../activity.actions";

const initialState = {
    transactions: [],
  };

// const AddTransactionsReducer = (state:any =initialState, action:any ) => {
//     console.log(action)
//     switch(action.type){
//         case ADD_TRANSACTIONS_ACTIVITY:
//             console.log(action.payload)
//             console.log("case1")
//             console.log(action)
//             return {
//                 ...state,
//                 transactions:action.payload,
//               };
//         default:
//             console.log("default")
//             return state;
//     }
// }

// export default  AddTransactionsReducer;

