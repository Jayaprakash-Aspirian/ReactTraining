import { ActionType } from "./action-types/ActionTypes"


interface UserDataAction {
    type : ActionType.USERDATA
    payload : string
}
interface RoleAction {
    type : ActionType.USERROLE
    payload : string
}

'ActionBasis<ActionType.USERDATA>'

interface UserDatasAction {
    type : ActionType.USER
    payload : any
}



export type Action = UserDataAction | RoleAction 