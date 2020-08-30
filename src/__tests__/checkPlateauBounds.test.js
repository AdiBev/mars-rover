import { checkPlateauBounds } from "../checkPlateauBounds";

const gridArea = [5, 5];

describe("checks if current coordinates are inside of grid area", () => {
  test("when coordinates out of reach return false", () => {
    expect(checkPlateauBounds(4, 6, gridArea)).toBe(false);
  });

  test("when coordinates are negative return false", () => {
    expect(checkPlateauBounds(3, -2, gridArea)).toBe(false);
  });

  test("when coordinates inside the grid area return true", () => {
    expect(checkPlateauBounds(3, 4, gridArea)).toBe(true);
  });

  test("when coordinates are 0,0 return true", () => {
    expect(checkPlateauBounds(0, 0, gridArea)).toBe(true);
  });
});
