import axios from "axios";
import { createLogic } from "redux-logic";
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

  async process() {
    const users = await axios
      .get("http://localhost:3000/users/")
      .then((resp) => resp.data);
    return users;
  },
  
  // process() {
  //   const users = allUsersData()
  //   return users;
  // },
});
