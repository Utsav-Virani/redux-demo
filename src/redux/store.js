import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/userResucer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
