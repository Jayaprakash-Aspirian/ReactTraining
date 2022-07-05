import { combineReducers } from "redux";
import { MessageReducer } from "./message-reducer";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer,
  topbarmessage : MessageReducer
});

export default reducers;

