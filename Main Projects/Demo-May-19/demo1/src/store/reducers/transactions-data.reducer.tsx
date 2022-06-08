import { AllTransactionsAction } from "../action";
import { ActionType } from "../action-types/action-types";

const initialState = {
  transactions: [],
};

export const AllTransactionsDataReducer = (
  state = initialState,
  action: AllTransactionsAction
) => {
  switch (action.type) {
    case ActionType.TRANSACTIONS_FETCH:
      return {
        ...state,
        transactions: [],
      };
    case ActionType.TRANSACTIONS_FETCH_FULLFILLED:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionType.TRANSACTIONS_FETCH_REJECTED:
      return {
        ...state,
      };
    case ActionType.TRANSACTIONS_FETCH_CANCEL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
