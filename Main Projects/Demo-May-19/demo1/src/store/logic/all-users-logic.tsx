import axios from "axios";
import { createLogic } from "redux-logic";
import { ActionType } from "../action-types/action-types";

export const usersFetchLogic = createLogic({
  type: ActionType.USERS_FETCH,
  cancelType: ActionType.USERS_FETCH_CANCEL,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: ActionType.USERS_FETCH_FULLFILLED,
    failType: ActionType.USERS_FETCH_REJECTED,
  },

  async process() {
    const users = await axios
      .get("http://localhost:3000/users/")
      .then((resp) => resp.data);
    return users;
  },
});
