import nextEpoch from "./nextepoch.js";
import Cell from "../cellclass/Cell.js";

describe("Given the function nextEpoch", () => {
  describe("When it receives 3 and a cell", () => {
    test("Then it returns a method called cellWillSurvive", () => {
      const aliveCells = 3;
      const cell = new Cell(1, 1, 1);
      const expextedResult = cell.cellWillSurvive();

      const nextGeneration = nextEpoch(aliveCells, cell);

      expect(nextGeneration).toBe(expextedResult);
    });
  });
});
