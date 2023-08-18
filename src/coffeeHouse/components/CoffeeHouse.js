import React from 'react';
import '../styles/CoffeeHouse.scss';
import CoffeeMachine from './CoffeeMachine';

const CoffeeHouse = () => {
   return (
      <div className="coffee-house">
         <h2 className="header">
            Carolina's Coffee House
         </h2>
         <CoffeeMachine />
      </div>
   );
};

export default CoffeeHouse;