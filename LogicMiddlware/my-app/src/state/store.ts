import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import reducers from "./reducers/index";


const logicMiddleware = createLogicMiddleware();

const middleware = applyMiddleware(
  logicMiddleware
);

const enhancer = middleware;

export const configureStore= createStore(reducers, enhancer);

