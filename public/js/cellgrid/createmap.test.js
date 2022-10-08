import createMap from "./createmap.js";

describe("Given the function createMap", () => {
  describe("When it receives 6, 6", () => {
    test("Then it should return a 3x3 array board", () => {
      const widht = 3;
      const height = 3;
      const expectedBoard = createMap(widht, height);

      const boardCreator = createMap(widht, height);

      expect(boardCreator).toStrictEqual(expectedBoard);
    });
  });
});
