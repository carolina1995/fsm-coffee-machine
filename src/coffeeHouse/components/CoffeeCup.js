import React from 'react';
import '../styles/CoffeeCup.scss';

const CoffeeCup = ({ isPouring }) => {
  return (
    // if isPouring is true we show the coffee cup full
    <div className={`coffee-cup-container ${isPouring ? 'pouring' : ''}`}>
      <div className="coffee"></div>
    </div>
  );
};

export default CoffeeCup;