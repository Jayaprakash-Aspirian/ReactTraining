import { createStore, compose, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import reducers from "./reducers";
import { usersFetchLogic } from "./logic/all-users-logic";
import { transactionsFetchLogic } from "./logic/all-transaction-history-logic";
import { useSelector } from "react-redux";

const allLogic: any = [usersFetchLogic, transactionsFetchLogic];

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
