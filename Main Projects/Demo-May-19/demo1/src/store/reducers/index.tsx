import { combineReducers } from "redux";
import { userReducer} from "./user-reducer";

const reducers = combineReducers({
  userdata: userReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
