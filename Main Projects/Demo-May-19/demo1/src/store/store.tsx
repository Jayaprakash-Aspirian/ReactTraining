// import { applyMiddleware, createStore } from 'redux';
// import { createLogicMiddleware } from 'redux-logic';
// import userLogic from './logic';
// import userReducer from './reducers/rootreducer';


// const logicMiddleware = createLogicMiddleware(userLogic);

// const middleware = applyMiddleware(
//   logicMiddleware
// );

// const enhancer = middleware; 

// export default function configureStore() {
//   const store = createStore(userReducer, enhancer);
//   return store;
// }

import { applyMiddleware } from "redux";
import { createStore} from 'redux'
import thunk from "redux-thunk";
import reducers from "./reducers/index";



export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)