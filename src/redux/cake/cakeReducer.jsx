import { BUY_CAKE } from "./CakeActionType";

const initialState = {
    numberOfCakes: 10,
};
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.paylod,
            };

        default:
            return state;
    }
};

export default cakeReducer;
