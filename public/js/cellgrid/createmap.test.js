import createMap from "./createmap.js";

describe("Given the function createMap", () => {
  describe("When it receives 6, 6", () => {
    test("Then it should return a 6x6 array board", () => {
      const widht = 6;
      const height = 6;
      const expectedBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      const boardCreator = createMap(widht, height);

      expect(boardCreator).toStrictEqual(expectedBoard);
    });
  });
});
