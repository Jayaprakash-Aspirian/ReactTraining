import { applyMiddleware } from "redux";
import { createStore} from 'redux'
import thunk from "redux-thunk";
import reducers from "./reducers/index";



export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)


// import { applyMiddleware } from "redux";
// import { legacy_createStore as createStore} from 'redux'
// import thunk from "redux-thunk";
// import reducers from "./reducers/index";



// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )