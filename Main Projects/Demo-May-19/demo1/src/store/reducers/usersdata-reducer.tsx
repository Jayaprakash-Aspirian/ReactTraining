import { CANCEL_GET_USERS_ACTIVITY, FULLFILLED_GET_USERS_ACTIVITY, GET_USERS_ACTIVITY, REJECTED_GET_USERS_ACTIVITY } from "../activity.actions";

const initialState = {
  list: [],
};

export const AllUsersDataReducer = (
  state = initialState,
  action:any
) => {
  switch (action.type) {
    case GET_USERS_ACTIVITY:
      return {
        ...state,
        list: [],
      };
    case FULLFILLED_GET_USERS_ACTIVITY:
      return {
        ...state,
        list: action.payload,
      };
    case REJECTED_GET_USERS_ACTIVITY:
      return {
        ...state,
      };
    case CANCEL_GET_USERS_ACTIVITY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
