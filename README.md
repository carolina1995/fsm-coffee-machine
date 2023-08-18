# Getting Started with Carolina's Coffee House FSM
This repo contains 3 folders, a server folder, a FSM(stateMachine) folder and a the client(coffeeHouse) folder.

## stateMachine
This folder contains our custom Finite State Machine external library.

## server
This folder contains the express server that sends the initial state value.

## coffeeHouse
This folder contains the main application components and the Finite State Machine states.

- ON: The coffee machine is on 
- SERVE: The coffee machine is serving the coffee
- OFF: The coffee machine is off

the Coffee House gets its initial state from the server, in case the response fails - it will get the initialState hardcoded in the client. 

- The coffee house state is initialized as OFF, when we press on the "ON/OFF" button there will be a transition between the ON and OFF state 
- When the machine is in ON state we can choose a coffee type to create and the machine will transition into the SERVE state and the coffee cup will be filled,   then the user can take it's coffee from the machine by pressing the "get your coffee" button.
- After the user has taken it's coffee, the coffee cup will be empty and the state of the machine will return to the ON state.

- The coffee house also has 2 tanks:
- water tank - indicates the amount of water is in the tank of the coffee machine
- beans tank - indicates the amount of beans is in the tank of the coffee machine 

each time we will serve coffee the tanks amount will decrease and if it will reach a cerain low amount we will display a warning message, 
if the tanks will be completely empty the user wont be able to create coffee untill the tanks will be refilled 


I added unit tests for the external FSM library and for the other client reducer state, these tests validate all 3 states and the general cohesion of the coffee machine (ON, OFF, SERVE).
 
This project was very awesome to create as a coffee lover as myself and gave me the oppurtunity to experience with tests which was very fun, thank you for the opprtunity! 

## Available Scripts

In the project directory, for running the project you should run the following commands:

### `npm i` - which will install all the dependencies.

### `npm run server` - to start our api, the node server will run on port 8080.

### `npm start` - to start our app.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
