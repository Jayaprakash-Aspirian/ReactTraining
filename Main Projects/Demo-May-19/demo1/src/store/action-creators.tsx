import { Person } from "../components/types/typesimport";
import { ActionType } from "./action-types/ActionTypes";

export const UserData = (userdata:string) => {
  return {
    type: ActionType.USERDATA,
    payload: userdata,
  };
};

