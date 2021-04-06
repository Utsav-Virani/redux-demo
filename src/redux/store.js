import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
