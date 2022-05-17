import axios from "axios";
import { createLogic } from "redux-logic";
import { ActionType } from "../action-types"

export type Action = {type:ActionType.DEPOSIT,payload:number}

const depositMoney = createLogic({
    type: ActionType.DEPOSIT, 
    cancelType: ActionType.BANKRUPT, 
    latest: true, 
    process({ getState, action }, dispatch, done) {
      axios .get('https://')
        .then(resp => resp.data.amount)
        .then(((amount:number):Action) => dispatch({ 
            type:ActionType.DEPOSIT,
            payload: amount 
        }))
        .catch(err => {
               console.error(err); 
               dispatch({ 
                   type:ActionType.BANKRUPT, 
                   payload: err,
                   error: true })
        })
        .then(() => done());
    }

})

export default depositMoney;