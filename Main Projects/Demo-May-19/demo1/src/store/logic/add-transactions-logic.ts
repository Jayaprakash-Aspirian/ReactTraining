import { createLogic } from "redux-logic";
import { addingTransactionsData } from "../../services/services-data";
import { ADD_TRANSACTIONS_ACTIVITY } from "../activity.actions";

export const transactionsAddLogic = createLogic({
  type: ADD_TRANSACTIONS_ACTIVITY,
  latest: true,

  process({ action }) {
    addingTransactionsData(action);
  },
});
