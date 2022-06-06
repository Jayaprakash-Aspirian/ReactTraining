import { combineReducers } from "redux";
import usersDataHandling from "./allusers-data-reducer";
import { userReducer} from "./user-reducer";
import { AllUsersDataReducer } from "./usersdata-reducer";

const reducers = combineReducers({
  allusersdata : AllUsersDataReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
