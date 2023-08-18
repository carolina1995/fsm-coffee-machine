 export const reducerActions = {
   SetWarning: 'SET_WARNING',

   SetWaterTank: 'SET_WATER_TANK',

   SetBeansTank: 'SET_BEANS_TANK',

   SetCoffeeType: 'SET_COFFEE_TYPE',

   SetServeCoffee: 'SET_SERVE_COFFEE'
}

export const setWarning = (text) => ({
   type: reducerActions.SetWarning,
   payload: text,
});

export const setWaterTank = (waterLevel) => ({
   type: reducerActions.SetWaterTank,
   payload: waterLevel,
});

export const setBeansTank = (beansLevel) => ({
   type: reducerActions.SetBeansTank,
   payload: beansLevel,
});

export const setCoffeeType = (coffeeType) => ({
   type: reducerActions.SetCoffeeType,
   payload: coffeeType,
});


export const setServeCoffee = (coffeeType) => ({
   type: reducerActions.SetServeCoffee,
   payload: coffeeType
})