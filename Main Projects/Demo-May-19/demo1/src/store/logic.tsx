import axios from 'axios';
import { createLogic } from 'redux-logic';
import { ActionType } from './action-types/ActionTypes';

const UserDataLogic = createLogic({
  
  type: ActionType.USER, 

  process({ getState, action }, dispatch, done) {
    // const user:string = action.payload;

    
    dispatch({ type:ActionType.USERDATASUCCESS });
     
  }
});


