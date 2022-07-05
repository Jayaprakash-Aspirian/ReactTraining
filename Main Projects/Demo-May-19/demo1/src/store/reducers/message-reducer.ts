import { MESSAGE_REMOVE, SUCCESS_MESSAGE} from "../activity.actions";

const initialState = {
  successmessage : []
}
  
export const MessageReducer = (
    state = initialState,
    action :any
  ) => {
    console.log(action)
    console.log(action.payload)
    switch (action.type) {
      case SUCCESS_MESSAGE :
        return {
          ...state,
          successmessage :action.payload
        } ;
      case MESSAGE_REMOVE:
        return initialState;
      default:
        return state;
    }
};


// import { ActionType } from "../action-types/action-types";

// const initialState = {
//     userdata: [],
//   };

// const UserDataReducer = (state= initialState, action:UserDataAction ) => {
//     switch(action.type){
//         case ActionType.LOGGINED_USER_DATA:
//             console.log("yes1")
//             return {
//                 ...state,
//                 userdata : action.payload,
//             }
//         default:
//             console.log("yes2")
//             return state;
//     }
// }

// export default UserDataReducer;
  