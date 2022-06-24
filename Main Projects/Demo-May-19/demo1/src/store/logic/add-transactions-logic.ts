import axios from "axios";
import { applyMiddleware } from "redux";
import { createLogic } from "redux-logic";
import { allTransactionsData,addingTransactionsData } from "../../services/services-data";
import { ADD_TRANSACTIONS_ACTIVITY,getActivityUsersData,ADD_USERS_ACTIVITY, CANCEL_GET_TRANSACTIONS_ACTIVITY, FULLFILLED_GET_TRANSACTIONS_ACTIVITY, GET_TRANSACTIONS_ACTIVITY, REJECTED_GET_TRANSACTIONS_ACTIVITY, addTransactionsData, rejecttransactionsData, FULLFILLED_ADD_TRANSACTIONS_ACTIVITY, REJECTED_ADD_TRANSACTIONS_ACTIVITY, CANCEL_ADD_TRANSACTIONS_ACTIVITY } from "../activity.actions";


export const transactionsAddLogic = createLogic({
  type:ADD_TRANSACTIONS_ACTIVITY,
  latest: true,
  
  process({action }) {
    console.log(action)
    addingTransactionsData(action)
  },
});


