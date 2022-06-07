import { Person } from "../components/types/typesimport";
import { ActionType } from "./action-types/ActionTypes";

interface UserDataAction {
  type: ActionType.USERDATA;
  payload: any;
}

interface UsersDataAction{
  type:ActionType.ALLUSERSDATA;
  payload:any
}

interface SuccessUsersDataAction{
  type:ActionType.FETCH_USERSDATA_SUCCESS;
  payload:any
}
interface FailedUsersDataAction{
  type:ActionType.FETCH_USERSDATA_FAILED;
  payload:any
}

///////

interface AllUsersDataAction {
  type: ActionType.USERS_FETCH;
}

interface SuccessAllUsersDataAction{
  type:ActionType.USERS_FETCH_FULLFILLED;
  payload:any
}

interface RejectedUsersDataAction{
  type:ActionType.USERS_FETCH_REJECTED;
  payload:any
}
interface CanceledUsersDataAction{
  type:ActionType.USERS_FETCH_CANCEL;
 
}

interface AllTransactionsDataAction {
  type: ActionType.TRANSACTIONS_FETCH ;
}

interface SuccessAllTransactionsDataAction{
  type:ActionType.TRANSACTIONS_FETCH_CANCEL;
  payload:any
}

interface RejectedTransactionsDataAction{
  type:ActionType.TRANSACTIONS_FETCH_FULLFILLED;
  payload:any
}
interface CanceledTransactionsDataAction{
  type:ActionType.TRANSACTIONS_FETCH_REJECTED;
}



export type Action = UserDataAction;
export type UsersAction =  UsersDataAction | SuccessUsersDataAction  | FailedUsersDataAction ;
export type AllUsersAction = AllUsersDataAction | SuccessAllUsersDataAction | RejectedUsersDataAction |CanceledUsersDataAction ; 
export type AllTransactionsAction = AllTransactionsDataAction | SuccessAllTransactionsDataAction | RejectedTransactionsDataAction |CanceledTransactionsDataAction ; 