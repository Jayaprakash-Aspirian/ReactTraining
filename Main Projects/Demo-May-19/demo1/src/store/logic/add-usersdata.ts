import { createLogic } from "redux-logic";
import { addingUsersData } from "../../services/services-data";
import { ADD_USERS_ACTIVITY } from "../activity.actions";

export const usersAddLogic = createLogic({
  type: ADD_USERS_ACTIVITY,
  latest: true,

  process({ action }:any) {
    addingUsersData(action.payload);
  },
});
