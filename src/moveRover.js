import { executeInstructions } from "./executeInstructions";
import { handleOutput } from "./handleOutput";

///Main func
export const moveRover = (
  roverALocation,
  roverAInstructions,
  roverBLocation,
  roverBInstructions,
  gridArea
) => {
  const gridAreaArr = gridArea.split(" ");

  const roverAFinalLocation = executeInstructions(
    roverALocation,
    roverAInstructions,
    gridAreaArr
  );

  const roverBFinalLocation = executeInstructions(
    roverBLocation,
    roverBInstructions,
    gridAreaArr
  );

  const roversLocations = [roverAFinalLocation, roverBFinalLocation];
  const finalOutput = handleOutput(roversLocations);
  return finalOutput;
};
