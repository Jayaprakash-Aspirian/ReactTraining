import axios from "axios";
import { createLogic } from "redux-logic";
import { allTransactionsData } from "../../services/services-data";

import { ADD_USERS_ACTIVITY, CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY } from "../activity.actions";

export const usersAddLogic = createLogic({
  type: ADD_USERS_ACTIVITY,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FULLFILLED_GET_TRANSACTIONS_ACTIVITY,
    failType:REJECTED_GET_TRANSACTIONS_ACTIVITY ,
  },

  // async process() {
  //   const users = await axios
  //     .get("http://localhost:3000/transaction-history/")
  //     .then((resp) => resp.data);
  //   return users;
  // },

  process() {
    const transactions = allTransactionsData().then((resp) => resp.data)
    return transactions;
  },
});