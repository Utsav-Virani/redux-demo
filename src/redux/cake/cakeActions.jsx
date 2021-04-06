import { BUY_CAKE } from "./CakeActionType"

export const buyCake = (number = 1) =>{
    return {
        type: BUY_CAKE,
        paylod:number,
    }
}