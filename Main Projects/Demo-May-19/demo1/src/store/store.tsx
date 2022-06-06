// import { applyMiddleware } from "redux";
// import { createStore } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers/index";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

// const deps = {
//   httpClient: axios
// };



// const middleware = applyMiddleware(
//   logicMiddleware
// );
// const middlewares = [logicMiddleware]

// const enhancer = [middleware];

// export default function configureStore() {
//   const store = createStore(reducers,{},compose(applyMiddleware(...middlewares)));
//   return store;
// }

//////////////

import { createStore, compose, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import reducers from './reducers';
import { usersFetchLogic } from './logic/all-users-logic';

const allLogic = [usersFetchLogic];

export default function configureStore() {

  const logicMiddleware = createLogicMiddleware(allLogic, {});
  const middlewares = [
    logicMiddleware,
  ];

  let store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)));

  // store.logicMiddleware = logicMiddleware; 
  return store;
}