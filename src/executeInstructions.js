import { getRoverInfo } from "./getRoverInfo";
import { checkPlateauBounds } from "./checkPlateauBounds";
import { directionsObj } from "./utils/directionsObj";

export const executeInstructions = (coordinates, instructions, gridArea) => {
  const coordinatesArr = coordinates.split(" ");
  const instructionsArr = instructions.split("");

  ///initial rover coordinates and direction
  let { position, direction } = getRoverInfo(coordinatesArr);

  instructionsArr.forEach((instruction) => {
    ///check if bounds are within grid area
    if (
      instruction === "M" &&
      checkPlateauBounds(position.x, position.y, gridArea)
    ) {
      position = directionsObj[direction]["move"](position.x, position.y);
    } else if (checkPlateauBounds(position.x, position.y, gridArea)) {
      direction = directionsObj[direction][instruction];
    }
  });

  return { x: position.x, y: position.y, direction };
};
