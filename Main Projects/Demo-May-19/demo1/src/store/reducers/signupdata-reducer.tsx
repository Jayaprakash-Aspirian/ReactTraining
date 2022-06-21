import { SIGNUP_DATA } from "../activity.actions";


const initialState = ""

const SignupReducer = (state:string =initialState, action:any ) => {
    switch(action.type){
        case SIGNUP_DATA:
            return state + action.payload;
        default:
            return state;
    }
}

export default SignupReducer;