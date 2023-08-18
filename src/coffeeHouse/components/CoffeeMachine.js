import React, { useEffect, useReducer } from 'react';
import '../styles/CoffeeMachine.scss'
import Display from './Display';
import Tank from './Tank';
import Selector from './Selector';
import CoffeeCup from './CoffeeCup';
import { useCoffeeMachineEngine } from '../useMachine';
import { CoffeeRequirements, CoffeeMachineStates, TankLevelLimit, initialState } from '../../constants';
import { coffeeReducer } from '../reducer';
import { setWarning, setBeansTank, setCoffeeType, setWaterTank, setServeCoffee } from '../actions';
import { getInitialState } from '../api';

const CoffeeMachine = () => {
  const [currentState, setTransition] = useCoffeeMachineEngine();
  const [coffeeMachineState, dispatch] = useReducer(coffeeReducer, initialState);

  useEffect(() => {
    // get the initial state from the API
    getInitialState().then(result => {
      setTransition(result.initialState);
    }).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    // show warning when water or beans level is low 
    if (coffeeMachineState.waterLevel <= 20 || coffeeMachineState.beansLevel <= 10) {
      dispatch(setWarning('Refill water or beans to continue making coffee!'))

    } else {
      dispatch(setWarning(''))
    }

    // each time one of the water or beans level changes we need to check if their level is low 
  }, [coffeeMachineState.waterLevel, coffeeMachineState.beansLevel]);

  const finishedServe = () => {
    // set the transition to "on" after coffee was served
    setTransition(CoffeeMachineStates.on);
    dispatch(setCoffeeType(''))
  }

  const startMachine = () => {
    // start the machine and reset coffee type
    if (currentState === CoffeeMachineStates.off) {
      setTransition(CoffeeMachineStates.on)
      dispatch(setCoffeeType(''))
    } else {
      // turn off the machine
      setTransition(CoffeeMachineStates.off)
    }
  };

  const makeCoffee = (type) => {
    if (currentState !== CoffeeMachineStates.on) {
      return;
    }
    // get the required supply to make the desired coffee 
    let requiredSupply = CoffeeRequirements[type];

    // check if we have enought resources to make the desired coffee 
    if (coffeeMachineState.waterLevel >= requiredSupply.water && coffeeMachineState.beansLevel >= requiredSupply.beans) {
      // transition into serve from on and set the new water and beans level 
      setTransition(CoffeeMachineStates.serve)
      dispatch(setServeCoffee(type))
    } else {
      dispatch(setWarning('Not enough resources to make ' + type + ' please refill!'));
    }
  };

  const refill = (type) => {
    // refill the tank by the type we receive 
    if (type === "water") dispatch(setWaterTank(TankLevelLimit.water))
    if (type === "beans") dispatch(setBeansTank(TankLevelLimit.beans));
  };

  return (
    <div className="coffee-machine">
      <div className='coffee-machine-tanks-contanier'>
        <Tank type="water" level={coffeeMachineState.waterLevel} refill={refill} />
        <Tank type="beans" level={coffeeMachineState.beansLevel} refill={refill} />
      </div>
      <div className='coffee-machine-controller-contanier'>
        <Selector
          currentState={currentState}
          makeCoffee={makeCoffee}
          startMachine={startMachine}
        />
        <Display finishedServe={finishedServe} currentState={currentState} coffeeType={coffeeMachineState.coffeeType} waterLevel={coffeeMachineState.waterLevel} beansLevel={coffeeMachineState.beansLevel} warning={coffeeMachineState.warning} />
        <CoffeeCup isPouring={currentState === CoffeeMachineStates.serve} />
      </div>
    </div>
  );
};

export default CoffeeMachine;