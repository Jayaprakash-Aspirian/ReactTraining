import { AllUsersAction, UsersAction } from '../action';
import { ActionType } from '../action-types/ActionTypes';

const initialState = {
    list: [],
  };

export const AllUsersDataReducer = (state = initialState, action:AllUsersAction) =>{
    switch (action.type) {
      case  ActionType.USERS_FETCH:
        console.log("yes1")
        return {
          ...state,
          list: []
        };
      case ActionType.USERS_FETCH_FULLFILLED:
        console.log(action.payload)
        console.log("yes2")
        console.log(action.payload)
        console.log("aa")
        return {
          ...state,
          list: action.payload,
        };
      case ActionType.USERS_FETCH_REJECTED:
        console.log("yes3")
        return {
          ...state,
        };
      case ActionType.USERS_FETCH_CANCEL:
        console.log("yes4")
        return {
          ...state,
        };
      default :
        console.log("yes5")
        return state;
    }
  }
  