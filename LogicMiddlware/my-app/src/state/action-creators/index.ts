import { Dispatch } from "redux"
import { Action } from "../action/index"
import { ActionType } from "../action-types"
import { createLogic } from "redux-logic"




// interface DepositeAction {
//     type : ActionType.DEPOSIT
//     payload : number
// }

// interface WithdrawAction{
//     type : ActionType.WITHDRAW
//     payload : number
// }

// interface BankruptAction{
//     type:ActionType.BANKRUPT
// }

export type Action = DepositeAction | WithdrawAction | BankruptAction

// export const depositMoney = (amount : number) => {
//     return (dispatch : Dispatch<Action>) => {
//         dispatch({
//             type : ActionType.DEPOSIT,
//             payload:amount
//         })
//     }
// }


export const depositMoney = createLogic({
    type:ActionType.DEPOSIT,
    validate({ getState, action }, allow, reject) {
        
        const user = action.payload;
        if (!getState().users[user.id]) { // can also hit server to check
          allow(action);
        } else {
          reject({ type: USER_EXISTS_ERROR, payload: user, error: true })
        }
      }

})



export const withdrawMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.BANKRUPT,
        })
    }
}