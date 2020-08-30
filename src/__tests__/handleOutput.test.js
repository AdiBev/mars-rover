import { handleOutput } from "../handleOutput";
const roverLocations = [
  { x: 1, y: 3, direction: "N" },
  { x: 5, y: 1, direction: "E" },
];

test("return final directions and coordinates of rovers in string", () => {
  expect(handleOutput(roverLocations)).toBe("1 3 N\n5 1 E\n");
});
