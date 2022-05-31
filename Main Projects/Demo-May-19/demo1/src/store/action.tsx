import { Person } from "../components/types/typesimport"
import { ActionType } from "./action-types/ActionTypes"


interface UserDataAction {
    type : ActionType.USERDATA
    payload : string
}


export type Action = UserDataAction