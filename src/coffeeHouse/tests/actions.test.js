import { reducerActions, setWarning, setWaterTank, setBeansTank, setCoffeeType, setServeCoffee } from '../actions';

describe('Action Creators', () => {

   test('should create an action to set warning', () => {
      const text = 'Low water level';
      const expectedAction = {
         type: reducerActions.SetWarning,
         payload: text
      };
      expect(setWarning(text)).toEqual(expectedAction);
   });

   test('should create an action to set water tank level', () => {
      const waterLevel = 75;
      const expectedAction = {
         type: reducerActions.SetWaterTank,
         payload: waterLevel
      };
      expect(setWaterTank(waterLevel)).toEqual(expectedAction);
   });

   test('should create an action to set beans tank level', () => {
      const beansLevel = 50;
      const expectedAction = {
         type: reducerActions.SetBeansTank,
         payload: beansLevel
      };
      expect(setBeansTank(beansLevel)).toEqual(expectedAction);
   });

   test('should create an action to set coffee type', () => {
      const coffeeType = 'Espresso';
      const expectedAction = {
         type: reducerActions.SetCoffeeType,
         payload: coffeeType
      };
      expect(setCoffeeType(coffeeType)).toEqual(expectedAction);
   });

   test('should create an action to serve coffee', () => {
      const coffeeType = 'Latte';
      const expectedAction = {
         type: reducerActions.SetServeCoffee,
         payload: coffeeType
      };
      expect(setServeCoffee(coffeeType)).toEqual(expectedAction);
   });
});