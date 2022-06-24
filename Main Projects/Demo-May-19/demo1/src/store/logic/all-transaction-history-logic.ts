import axios from "axios";
import { createLogic } from "redux-logic";
import { allTransactionsData } from "../../services/services-data";

import { CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY } from "../activity.actions";

export const transactionsFetchLogic = createLogic({
  type: GET_TRANSACTIONS_ACTIVITY,
  cancelType: CANCEL_GET_TRANSACTIONS_ACTIVITY,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FULLFILLED_GET_TRANSACTIONS_ACTIVITY,
    failType:REJECTED_GET_TRANSACTIONS_ACTIVITY ,
  },

  process() {
    const transactions = allTransactionsData().then((resp) => resp.data)
    return transactions;
  },
});
