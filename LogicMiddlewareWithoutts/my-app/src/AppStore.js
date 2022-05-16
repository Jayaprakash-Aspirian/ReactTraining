import { createLogicMiddleware } from 'redux-logic';
import { applyMiddleware,createStore,compose } from 'redux';

const daps = {
    httpClient : axios
};

const logicMiddleware = createLogicMiddleware(rootLogic,deps);

const composedMiddleware = compose(applyMiddleware(logicMiddleware));

export default createStore(rootReducer,composedMiddleware);

