import { createStore ,applyMiddleware} from "redux";
import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from 'redux-logger';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;
