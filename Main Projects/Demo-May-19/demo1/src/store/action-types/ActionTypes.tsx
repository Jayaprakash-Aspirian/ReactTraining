export enum ActionType {
  USERDATA = "userdata",
  ALLUSERSDATA = "allusersdata",
  CANCEL_FETCH_DATA = "cancelfetchdata",
  FETCH_USERSDATA_SUCCESS = "fetchusersdatasuccess",
  FETCH_USERSDATA_FAILED = "fetchusersdatafailed",
  
  USERS_FETCH = "fetchusersdata",
  USERS_FETCH_CANCEL = "fetchcancelusersdata",
  USERS_FETCH_FULLFILLED = "fetchfullfilledusersdata",
  USERS_FETCH_REJECTED = "fetchrejectedusersdata",

  TRANSACTIONS_FETCH = "fetchtransactionsdata",
  TRANSACTIONS_FETCH_CANCEL = "fetchcanceltransactionsdata",
  TRANSACTIONS_FETCH_FULLFILLED = "fetchfullfilledtransactionsdata",
  TRANSACTIONS_FETCH_REJECTED = "fetchrejectedtransactionsdata",
}
