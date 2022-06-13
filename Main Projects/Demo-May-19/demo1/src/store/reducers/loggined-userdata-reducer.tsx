import { UserDataAction } from "../action";
import { ActionType } from "../action-types/action-types";


const UserDataReducer = (state:any={}, action:UserDataAction ) => {
    switch(action.type){
        case ActionType.LOGGINED_USER_DATA:
            console.log("yes1")
            state = action.payload
            return state;
        default:
            console.log("yes2")
            return state;
    }
}

export default UserDataReducer;