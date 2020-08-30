import { getRoverInfo } from "../getRoverInfo";

test("return rovers direction and coordinates object", () => {
  expect(getRoverInfo(["1", "2", "N"])).toEqual({
    position: { x: 1, y: 2 },
    direction: "N",
  });
});
