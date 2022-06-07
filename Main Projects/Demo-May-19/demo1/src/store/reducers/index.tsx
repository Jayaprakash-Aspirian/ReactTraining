import { combineReducers } from "redux";
import usersDataHandling from "./allusers-data-reducer";
import { AllTransactionsDataReducer } from "./transactions-data.reducer";
import { userReducer} from "./user-reducer";
import { AllUsersDataReducer } from "./users-data-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer,
  alltransactionsdata : AllTransactionsDataReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
