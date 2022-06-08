import { ActionType } from "./action-types/action-types";

interface AllUsersDataAction {
  type: ActionType.USERS_FETCH;
}

interface SuccessAllUsersDataAction {
  type: ActionType.USERS_FETCH_FULLFILLED;
  payload: any;
}

interface RejectedUsersDataAction {
  type: ActionType.USERS_FETCH_REJECTED;
  payload: any;
}
interface CanceledUsersDataAction {
  type: ActionType.USERS_FETCH_CANCEL;
}

interface AllTransactionsDataAction {
  type: ActionType.TRANSACTIONS_FETCH;
}

interface SuccessAllTransactionsDataAction {
  type: ActionType.TRANSACTIONS_FETCH_CANCEL;
  payload: any;
}

interface RejectedTransactionsDataAction {
  type: ActionType.TRANSACTIONS_FETCH_FULLFILLED;
  payload: any;
}
interface CanceledTransactionsDataAction {
  type: ActionType.TRANSACTIONS_FETCH_REJECTED;
}

export type AllUsersAction =
  | AllUsersDataAction
  | SuccessAllUsersDataAction
  | RejectedUsersDataAction
  | CanceledUsersDataAction;
export type AllTransactionsAction =
  | AllTransactionsDataAction
  | SuccessAllTransactionsDataAction
  | RejectedTransactionsDataAction
  | CanceledTransactionsDataAction;
