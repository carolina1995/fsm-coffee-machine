export function createMachine(stateMachineDefinition) {
   const machine = {
      state: stateMachineDefinition.initialState,
      reducer(currentState, event) {
        // get the current state 
        const currentStateDefinition = stateMachineDefinition[currentState];
        // get the next transition by the incoming event
        const destinationTransition = currentStateDefinition.transitions[event];
        // check if the next transition exist 
        if (!destinationTransition) {
          return machine.state;
        }

        // get the target (next state) of the FSM
        const destinationState = destinationTransition.target;
  
        // generic custom callback that we can execute additional business logic. 
        destinationTransition.action();

        // set the new state machine with the destination state 
        machine.state = destinationState;
  
        return machine.state;
      }
    };
    return machine;
  }
 
  