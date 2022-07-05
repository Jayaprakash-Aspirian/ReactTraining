import { createLogic } from "redux-logic";
import { allTransactionsData } from "../../services/services-data";
import {
  CANCEL_GET_TRANSACTIONS_ACTIVITY,
  FULLFILLED_GET_TRANSACTIONS_ACTIVITY,
  GET_TRANSACTIONS_ACTIVITY,
  REJECTED_GET_TRANSACTIONS_ACTIVITY,
  SUCCESS_MESSAGE,
} from "../activity.actions";

export const messageLogic = createLogic({
  type: SUCCESS_MESSAGE,
  latest: true,

  process({action}:any) {
    console.log(action.payload)
  },
});
