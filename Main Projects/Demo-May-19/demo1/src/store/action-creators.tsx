import { ActionType } from "./action-types/ActionTypes";

export const UserData = (userdata: string) => {
  console.log("okay1");
  return {
    type: ActionType.USERDATA,
    payload: userdata,
  };
};
