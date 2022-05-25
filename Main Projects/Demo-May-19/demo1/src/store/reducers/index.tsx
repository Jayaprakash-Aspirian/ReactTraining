import { combineReducers } from "redux";
import userReducer, { roleReducer } from "./rootreducer";


const reducers = combineReducers({
    userdata:userReducer,
    userrole:roleReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>