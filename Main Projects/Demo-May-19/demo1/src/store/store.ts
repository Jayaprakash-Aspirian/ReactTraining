import { createStore, compose, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { allLogic } from "./logic";
import reducers from "./reducers";

export default function configureStore() {
  const logicMiddleware = createLogicMiddleware(allLogic, {});
  const middlewares = [logicMiddleware];

  let store = createStore(
    reducers,
    {},
    compose(applyMiddleware(...middlewares))
  );

  return store;
}
