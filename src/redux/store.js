import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamReducer,
});

const store = createStore(rootReducer);

export default store;
