import axios from 'axios';
import { createLogic } from 'redux-logic';
import { ActionType } from './action-types/ActionTypes';

const UserDataLogic = createLogic({
  
  type: ActionType.USERDATA, 
  latest:true,

  process({ getState, action }, dispatch, done) {
    
    axios.get('http://localhost:3001/login').then()
    dispatch({ type:ActionType.USERDATASUCCESS, payload: })
     
  }
});


