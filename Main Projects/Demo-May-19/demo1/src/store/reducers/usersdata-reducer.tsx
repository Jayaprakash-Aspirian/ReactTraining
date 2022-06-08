import { AllUsersAction } from "../action";
import { ActionType } from "../action-types/action-types";

const initialState = {
  list: [],
};

export const AllUsersDataReducer = (
  state = initialState,
  action: AllUsersAction
) => {
  switch (action.type) {
    case ActionType.USERS_FETCH:
      return {
        ...state,
        list: [],
      };
    case ActionType.USERS_FETCH_FULLFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case ActionType.USERS_FETCH_REJECTED:
      return {
        ...state,
      };
    case ActionType.USERS_FETCH_CANCEL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
