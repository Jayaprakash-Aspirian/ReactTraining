import { Dispatch } from "react"
import { UserDataAction } from "../action"
import { ActionType } from "../action-types/action-types"


export const  Userdetails= (datas: any) => {
    return (dispatch : Dispatch<UserDataAction>) => {
        dispatch({
            type : ActionType.LOGGINED_USER_DATA,
            payload:datas
        })
    }
}