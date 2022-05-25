import { Action } from "../action";
import { ActionType } from "../action-types/ActionTypes";

const initialState = "";

const userReducer = (state:string =initialState, action:Action) => {
    switch(action.type){
        case ActionType.USERDATA:
            return state + action.payload;
        default:
            return state;
    }
}

export const roleReducer = (state:string =initialState, action:Action) => {
    switch(action.type){
        case ActionType.USERROLE:
            return state + action.payload;
        default:
            return state;
    }
}

export default userReducer;