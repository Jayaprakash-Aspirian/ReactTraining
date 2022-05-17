import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';

import reducers from './reducers';

import { createStore,applyMiddleware } from 'redux';
import logic from './logic';
import depositMoney from './Logics/firstLogic';


const logicMiddleware = createLogicMiddleware([depositMoney]);

const middleware = applyMiddleware(
  logicMiddleware
);

const enhancer = middleware; 

// export default function configureStore() {
//   const store = createStore(reducers, enhancer);
//   return store;
// }

const store = createStore(reducers, enhancer);

export default store;
