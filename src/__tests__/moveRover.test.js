import { moveRover } from "../moveRover";

///Main func test with provided input and expected output
test("returns rovers final locations and directions", () => {
  expect(moveRover("1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM", "5 5")).toBe(
    "1 3 N\n5 1 E\n"
  );
});
