import { CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY } from "../activity.actions";

const initialState = {
  transactions: [],
};

export const AllTransactionsDataReducer = (
  state = initialState,
  action :any
) => {
  console.log("y")
  console.log(action)
  switch (action.type) {
    case GET_TRANSACTIONS_ACTIVITY:
      console.log("athr1")
      return {
        ...state,
        transactions: [],
      };
    case FULLFILLED_GET_TRANSACTIONS_ACTIVITY:
      console.log("athr2")
      return {
        ...state,
        transactions: action.payload,
      };
    case CANCEL_GET_TRANSACTIONS_ACTIVITY:
      return {
        ...state,
      };
    case REJECTED_GET_TRANSACTIONS_ACTIVITY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
