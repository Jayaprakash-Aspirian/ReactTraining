import { ActionType } from "./action-types/ActionTypes"


interface UserDataAction {
    type : ActionType.USERDATA
    payload : string
}
interface RoleAction {
    type : ActionType.USERROLE
    payload : string
}

export type Action = UserDataAction | RoleAction