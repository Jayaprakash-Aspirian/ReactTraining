import axios from "axios";
import { createLogic } from "redux-logic";
import { allUsersData } from "../../services/services-data";
import { GET_USERS_ACTIVITY,CANCEL_GET_USERS_ACTIVITY,FULLFILLED_GET_USERS_ACTIVITY,REJECTED_GET_USERS_ACTIVITY } from "../activity.actions";

export const usersFetchLogic = createLogic({
  type: GET_USERS_ACTIVITY,
  cancelType: CANCEL_GET_USERS_ACTIVITY,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FULLFILLED_GET_USERS_ACTIVITY,
    failType:REJECTED_GET_USERS_ACTIVITY,
  },

  process() {
    const users = allUsersData().then((resp) => resp.data)
    return users;
  },
  
});
