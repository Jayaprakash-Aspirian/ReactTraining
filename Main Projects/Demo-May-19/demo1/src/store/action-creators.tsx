import { Dispatch } from "redux"
import { Action } from "redux-logic"
import { ActionType } from "./action-types/ActionTypes"


export const demo = (mobile : string) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.USERDATA,
            payload: mobile
        })
    }
}

export const demo1 = (role : string) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.USERROLE,
            payload: role
        })
    }
}