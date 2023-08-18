import { useReducer } from 'react';
import { createMachine } from "../stateMachine/createMachine";

// create the state machine constant defenitions 
const machine = createMachine({
   initialState: "OFF",
   OFF: {
      transitions: {
         ON: {
            target: "ON",
            action() {
               console.log('transition action for "on" in "off" state');
            },
         },
      },
   },
   ON: {
      transitions: {
         SERVE: {
            target: "SERVE",
            action() {
               console.log('transition action for "serve" in "on" state');
            },
         },
         OFF: {
            target: "OFF",
            action() {
               console.log('transition action for "off" in "on" state');
            },
         },
      },
   },
   SERVE: {
      transitions: {
         OFF: {
            target: "OFF",
            action() {
               console.log('transition action for "off" in "serve" state');
            },
         },
         ON: {
            target: "ON",
            action() {
               console.log('transition action for "on" in "serve" state');
            },
         }
      },
   },
}); 

// integrate state machine to react
export const useCoffeeMachineEngine = () => {
   const [currentState, setTransition] = useReducer(machine.reducer, machine.state);

   return [currentState, setTransition];
}

