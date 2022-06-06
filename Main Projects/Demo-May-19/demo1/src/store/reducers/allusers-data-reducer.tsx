import { Action,UsersAction } from "../action";
import { ActionType } from "../action-types/ActionTypes";

// const initialState = "";

// export const allusersReducer = (state: string = initialState, action: Action) => {
//   switch (action.type) {
//     case ActionType.USERDATA:
//       return state + action.payload;
//     default:
//       return state;
//   }
// };


// const initialState = {
//     isFetching: false,
//     weatherSummary: "no weather data fetched yet"
// };

const demoinitial  = {}

const usersDataHandling = (state={}, action:UsersAction) => {
    switch (action.type) {

        case ActionType.ALLUSERSDATA:
            return {
                ...state,
                isFetching: true
            };

        case ActionType.FETCH_USERSDATA_SUCCESS:
            console.log({
                action_payload: action.payload
            });
            return {
                ...state,
                isFetching: false,
                payload: action.payload,
            };

        case ActionType.FETCH_USERSDATA_FAILED:
            return {
                ...state,
                payload: "Failure fetching data",
                isFetching: false
            };

        default:
            return state;
    }
};

export default usersDataHandling;