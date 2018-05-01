import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import ViewportReducer from "./reducers/viewportReducer";
import NavReducer from "./reducers/navReducer";

let middleware = [thunk, promise()];

if (process.env.NODE_ENV !== "production") {
    /* eslint-disable */
    const logger = require("redux-logger");
    /* eslint-enable */
    middleware = [logger.createLogger(), ...middleware];
}

export default createStore(
    combineReducers({
        ViewportReducer,
        NavReducer
    }),
    {},
    applyMiddleware(...middleware)
);
