import { executeInstructions } from "./executeInstructions";
import { handleOutput } from "./handleOutput";

///Main func
const moveRover = (
  roverALocation,
  roverAInstructions,
  roverBLocation,
  roverBInstructions,
  gridArea
) => {
  const roverAFinalLocation = executeInstructions(
    roverALocation,
    roverAInstructions,
    gridArea
  );

  const roverBFinalLocation = executeInstructions(
    roverBLocation,
    roverBInstructions,
    gridArea
  );

  const roversLocations = [roverAFinalLocation, roverBFinalLocation];
  const finalOutput = handleOutput(roversLocations);

  return finalOutput;
};

moveRover("1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM", [5, 5]); //output 1 3 N  5 1 E
