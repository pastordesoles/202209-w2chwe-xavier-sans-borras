import checkCellMates from "./checkCellMates.js";
import createMap from "../cellgrid/createmap.js";

describe("Given the function checkCellMates", () => {
  describe("When it receives a cell at position 0,0 with it's property alive: true, and it's neighbours are the same", () => {
    test("Then it should return alive: false", () => {
      const rowCount = 3;
      const columnCount = 3;
      const grid = createMap(rowCount, columnCount);
      const cellPositionX = 1;
      const cellPositionY = 1;
      const cellInspected = grid[cellPositionX][cellPositionY];
      const expectedResult = true;

      const result = checkCellMates(cellInspected, grid);

      expect(result).toBe(expectedResult);
    });
  });
});
