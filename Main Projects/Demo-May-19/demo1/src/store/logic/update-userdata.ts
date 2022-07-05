import { createLogic } from "redux-logic";
import { UpdateuserDatas } from "../../services/services-data";
import { UPDATE_USER_ACTIVITY } from "../activity.actions";

export const userdataUpdateLogic  = createLogic({
  type: UPDATE_USER_ACTIVITY,
  latest: true,

  process({ action } :any) {
    UpdateuserDatas(action.payload);
  },
});