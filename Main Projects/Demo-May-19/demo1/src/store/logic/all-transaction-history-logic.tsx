import axios from "axios";
import { createLogic } from "redux-logic";
import { ActionType } from '../action-types/ActionTypes';


export const transactionsFetchLogic = createLogic({
    type:  ActionType.TRANSACTIONS_FETCH,
    cancelType:  ActionType.TRANSACTIONS_FETCH_CANCEL,
    latest: true, 
  
    processOptions: {
      dispatchReturn: true, 
      successType:  ActionType.TRANSACTIONS_FETCH_FULLFILLED,
      failType:  ActionType.TRANSACTIONS_FETCH_REJECTED
    },
  
    async process() {
      const users = await axios.get('http://localhost:3000/transaction-history/')
        .then((resp) => resp.data); 
      return users;
    }
  });