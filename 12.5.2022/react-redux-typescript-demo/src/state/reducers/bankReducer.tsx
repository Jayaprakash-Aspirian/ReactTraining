import { ActionType } from "../action-types";
import { Action } from "../action/index";




const initialState = 0;

// type Action = {
//     type:string,
//     payload?:number
// }


const bankReducer = (state:number =initialState, action:Action ) => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.DEPOSIT:
            return 0;
        default:
            return state
    }
}

export default bankReducer;