import React from 'react';
import '../styles/Display.scss';
import { CoffeeMachineStates } from '../../constants';

const Display = ({ coffeeType, waterLevel, beansLevel, warning, currentState, finishedServe }) => {
   return (
      <div className="display">
         <h3>Machine Status</h3>
         <div className='display-container'>

            <div>
               <div className="status">
                  <p><strong>Status:</strong> {currentState}</p>
                  <p><strong>Coffee Type:</strong> {coffeeType}</p>
               </div>
               <div className="levels">
                  <p><strong>Water:</strong> {waterLevel}%</p>
                  <p><strong>Beans:</strong> {beansLevel}%</p>
               </div>
            </div>

         </div>
         <div className="display-footer">
            {currentState !== CoffeeMachineStates.serve && <p className="warning">{warning}</p>}
            {currentState === CoffeeMachineStates.serve ? <button className='done-button' onClick={finishedServe}>Get Your Coffee</button> : <div />}
         </div>

      </div>
   );
};

export default Display;