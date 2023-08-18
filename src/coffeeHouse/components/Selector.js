import React from 'react';
import '../styles/Selector.scss';
import { CoffeeMachineStates, CoffeeTypes } from '../../constants';

const Selector = ({ makeCoffee, startMachine, currentState }) => {
   return (
      <div className="selector-panel">
         <button
            style={{ background: currentState === CoffeeMachineStates.on ? "lightGreen" : "rosyBrown" }}
            className="power-button"
            disabled={currentState === CoffeeMachineStates.serve}
            onClick={startMachine}
         >
            ON/OFF
         </button>
         <button
            className="coffee-button"
            disabled={currentState !== CoffeeMachineStates.on}
            onClick={() => makeCoffee(CoffeeTypes.Espresso)}
         >
            Espresso
         </button>
         <button
            className="coffee-button"
            disabled={currentState !== CoffeeMachineStates.on}
            onClick={() => makeCoffee(CoffeeTypes.DoubleEspresso)}
         >
            Double Espresso
         </button>
         <button
            className="coffee-button"
            disabled={currentState !== CoffeeMachineStates.on}
            onClick={() => makeCoffee(CoffeeTypes.Lungo)}
         >
            Lungo
         </button>
      </div>
   );
};

export default Selector;