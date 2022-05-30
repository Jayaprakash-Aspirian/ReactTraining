import { ActionType } from "./action-types/ActionTypes"


export const MobileData = (mobile:string) => {
    return {
    type: ActionType.USERDATA,
    payload :mobile
    }
}

