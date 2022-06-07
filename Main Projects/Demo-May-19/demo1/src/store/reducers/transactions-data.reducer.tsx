import { AllTransactionsAction, AllUsersAction, UsersAction } from '../action';
import { ActionType } from '../action-types/ActionTypes';

const initialState = {
    transactions: [],
  };

export const AllTransactionsDataReducer = (state = initialState, action:AllTransactionsAction) =>{
    switch (action.type) {
      case  ActionType.TRANSACTIONS_FETCH:
        console.log("yes1")
        return {
          ...state,
          transactions: []
        };
      case ActionType.TRANSACTIONS_FETCH_FULLFILLED:
        console.log("yes2")
        return {
          ...state,
          transactions: action.payload,
        };
      case ActionType.TRANSACTIONS_FETCH_REJECTED:
        console.log("yes3")
        return {
          ...state,
        };
      case ActionType.TRANSACTIONS_FETCH_CANCEL:
        console.log("yes4")
        return {
          ...state,
        };
      default :
      console.log("yes5")
        return state;
    }
  }
  