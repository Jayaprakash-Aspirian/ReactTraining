import { combineReducers } from "redux";
// import AddTransactionsReducer from "./addtransactionsdata-reducer";
import SignupReducer from "./signupdata-reducer";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer,
  signupdata :SignupReducer,
  // transactiondata : AddTransactionsReducer
});

export default reducers;

