import { createLogic } from "redux-logic";
import { addingUsersData } from "../../services/services-data";
import { GET_USER_ACTIVITY } from "../activity.actions";

export const transactionsAddLogic = createLogic({
  type:GET_USER_ACTIVITY,
  latest: true,
  
  process({action }) {
    console.log(action)
    addingUsersData(action)
  },
});