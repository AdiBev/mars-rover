import { executeInstructions } from "../executeInstructions";

const gridArea = [5, 5];

describe("execute coordinates, instructions and outputs the final position of the rover", () => {
  test("rover is faced West and x coordinate decreased by 1", () => {
    expect(executeInstructions("2 2 N", "LM", gridArea)).toEqual({
      x: 1,
      y: 2,
      direction: "W",
    });
  });

  test("rover's direction changes to South, coordinates remain same", () => {
    expect(executeInstructions("2 2 E", "R", gridArea)).toEqual({
      x: 2,
      y: 2,
      direction: "S",
    });
  });

  test("bounds are out of reach, coordinates and direction doesn't change", () => {
    expect(executeInstructions("2 6 E", "R", gridArea)).toEqual({
      x: 2,
      y: 6,
      direction: "E",
    });
  });

  test("rover moves along according to current direction and instructions", () => {
    expect(executeInstructions("1 2 N", "LMLMLMLMM", gridArea)).toEqual({
      x: 1,
      y: 3,
      direction: "N",
    });

    expect(executeInstructions("3 3 E", "MMRMMRMRRM", gridArea)).toEqual({
      x: 5,
      y: 1,
      direction: "E",
    });
  });
});
