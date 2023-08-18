export const CoffeeTypes = {
   Espresso: 'espresso',
   DoubleEspresso: 'double-espresso',
   Lungo: 'lungo'
}

export const CoffeeRequirements = {
   "espresso": { water: 10, beans: 5 },
   "double-espresso": { water: 20, beans: 10 },
   "lungo": { water: 30, beans: 10 }
}

export const TankLevelLimit = {
   water: 100,
   beans: 100
}

export const CoffeeMachineStates = {
   on: 'ON',
   off: 'OFF',
   serve: 'SERVE'
}

export const initialState = {
   warning: '',
   waterLevel: 80,
   beansLevel: 50,
   coffeeType: ''
}



