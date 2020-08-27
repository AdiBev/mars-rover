import { getRoverInfo } from "./getRoverInfo";
import { checkPlateauBounds } from "./checkPlateauBounds";
import { directionsObj } from "./utils/directionsObj";

export const executeInstructions = (coordinates, instructions, gridArea) => {
  ///initial rover coordinates
  const { position, direction } = getRoverInfo(coordinates);
  const instructionsArr = instructions.split(" ");

  instructionsArr.forEach((instruction) => {
    ///check if initial bounds are within grid area
    if (checkPlateauBounds(position.x, position.y, gridArea)) {
      if (instruction === "M") {
        position = directionsObj[direction]["move"](position.x, position.y);
      } else {
        direction = directionsObj[direction][instruction];
      }
    } else {
      console.log("Bounds out of reach");
    }
  });

  return { position, direction };
};
