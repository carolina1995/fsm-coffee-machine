import { reducerActions } from "./actions";
import { CoffeeRequirements } from "../constants";

export function coffeeReducer(state, action) {
   switch (action.type) {
      case reducerActions.SetWarning:
         return {
            ...state,
            warning: action.payload
         }
      case reducerActions.SetWaterTank:
         return {
            ...state,
            waterLevel: action.payload
         }
      case reducerActions.SetBeansTank:
         return {
            ...state,
            beansLevel: action.payload
         }

      case reducerActions.SetCoffeeType:

         return {
            ...state,
            coffeeType: action.payload
         }

      case reducerActions.SetServeCoffee:
         const requiredSupply = CoffeeRequirements[action.payload];
         return {
            ...state,
            coffeeType: action.payload,
            waterLevel: state.waterLevel - requiredSupply.water,
            beansLevel: state.beansLevel - requiredSupply.beans
         }
      default:
         return state;
   }
}


