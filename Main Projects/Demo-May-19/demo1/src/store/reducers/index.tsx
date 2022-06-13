import { combineReducers } from "redux";
import UserDataReducer from "./loggined-userdata-reducer";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer,
  userdata : UserDataReducer
});

export default reducers;

