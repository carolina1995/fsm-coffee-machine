import React from 'react';
import '../styles/Tank.scss';
import { TankLevelLimit } from '../../constants';

const Tank = ({ type, level, refill }) => {
  
   return (
      <div className="tank-container">
         <div className="tank">
            <div className="tank-fill" style={{ height: `${level}%`, backgroundColor: type === 'water' ? 'lightBlue' : 'saddleBrown' }}></div>
         </div>

         <button disabled={level === TankLevelLimit[type]} className='refill-button' onClick={() => refill(type)}>Refill {type}</button>
      </div>
   );
};

export default Tank;