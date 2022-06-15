import { combineReducers } from "redux";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer,
});

export default reducers;

