# Mars rover challenge

## Scripts 

Here [Jest](https://jestjs.io/) is used to run tests.

To run all tests  `npm run test`

To watch tests `npm run test:watch`

## Files details

:heavy_check_mark: indicates tests are added and they pass

`moveRover.js` -- Main function file handles rovers movements and directions. Returns `string`  :heavy_check_mark:

`checkPlateauBounds.js` -- Checks if current coordinates are inside Plateau bounds. Returns `boolean` :heavy_check_mark:

`getRoverInfo.js` -- Gets rover's initial coordinates and direction. Returns `{position: {x: number, y:number}, direction: string}` :heavy_check_mark:

`executeInstructions.js` -- Executes provided instructions and directions. Returns `{x:number, y:number, direction: string}` :heavy_check_mark:

`handleOutput.js` -- Handles final output and returns it in new lines. Returns `string` :heavy_check_mark:

`directionsObj.js` -- Transforms current direction and movement 

`index.js` -- Main entry file where `moveRover.js` file is imported
