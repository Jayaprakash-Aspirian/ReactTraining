import { combineReducers } from "redux";
import SignupReducer from "./signupdata-reducer";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer,
  signupdata :SignupReducer
});

export default reducers;

