import { createMachine } from '../createMachine';

let machine = null;

beforeEach(() => {
   const stateMachineDefinition = {
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
            },
         },
      },
   };

   machine = createMachine(stateMachineDefinition);
});

describe('Coffee Machine Reducer', () => {
   test('should transition from OFF to ON', () => {
      const newState = machine.reducer("OFF", "ON");
      expect(newState).toBe("ON");
   });

   test('should transition from ON to SERVE', () => {
      const newState = machine.reducer("ON", "SERVE");
      expect(newState).toBe("SERVE");
   });

   test('should transition from ON to OFF', () => {
      const newState = machine.reducer("ON", "OFF");
      expect(newState).toBe("OFF");
   });

   test('should transition from SERVE to ON', () => {
      const newState = machine.reducer("SERVE", "ON");
      expect(newState).toBe("ON");
   });

   test('should not transition for an undefined event in a state', () => {
      const newState = machine.reducer("OFF", "UNDEFINED_EVENT");
      expect(newState).toBe("OFF");
   });
});