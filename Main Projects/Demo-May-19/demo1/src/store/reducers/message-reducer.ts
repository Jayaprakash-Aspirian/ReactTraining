import { ERROR_MESSAGE, MESSAGE_REMOVE, SUCCESS_MESSAGE} from "../activity.actions";

const initialState = {
  successmessage : "",
  errormessage : ""
}
  
export const MessageReducer = (
    state = initialState,
    action :any
  ) => {
    switch (action.type) {
      case SUCCESS_MESSAGE :
        return {
          ...state,
          successmessage :action.payload
        } ;
      case ERROR_MESSAGE:
        return { 
          ...state,
          errormessage :action.payload
        }
      case MESSAGE_REMOVE:
        return initialState;
      default:
        return state;
    }
};


  