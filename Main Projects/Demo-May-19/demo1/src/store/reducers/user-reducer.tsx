import { Action } from "../action";
import { ActionType } from "../action-types/ActionTypes";

const initialState = "";

export const userReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.USERDATA:
      return state + action.payload;
    default:
      return state;
  }
};
