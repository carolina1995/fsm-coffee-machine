import { coffeeReducer } from '../reducer';
import { reducerActions } from '../actions';
import { CoffeeRequirements, initialState, CoffeeTypes } from '../../constants';

describe('Coffee Machine Reducer', () => {

   test('should set warning', () => {
      const action = {
         type: reducerActions.SetWarning,
         payload: 'warning test'
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState.warning).toBe('warning test');
   });

   test('should set water tank level', () => {
      const action = {
         type: reducerActions.SetWaterTank,
         payload: 80
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState.waterLevel).toBe(80);
   });

   test('should set beans tank level', () => {
      const action = {
         type: reducerActions.SetBeansTank,
         payload: 90
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState.beansLevel).toBe(90);
   });

   test('should set coffee type', () => {
      const action = {
         type: reducerActions.SetCoffeeType,
         payload: CoffeeTypes.Espresso
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState.coffeeType).toBe(CoffeeTypes.Espresso);
   });

   test('should serve coffee and decrement water and beans levels', () => {
      const coffeeType = CoffeeTypes.Espresso;
      const action = {
         type: reducerActions.SetServeCoffee,
         payload: coffeeType
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState.coffeeType).toBe(coffeeType);
      expect(newState.waterLevel).toBe(initialState.waterLevel - CoffeeRequirements[coffeeType].water);
      expect(newState.beansLevel).toBe(initialState.beansLevel - CoffeeRequirements[coffeeType].beans);
   });

   test('should return the current state for unknown action types', () => {
      const action = {
         type: 'UNKNOWN_ACTION_TYPE',
         payload: 'Some Payload'
      };
      const newState = coffeeReducer(initialState, action);
      expect(newState).toEqual(initialState);
   });
});