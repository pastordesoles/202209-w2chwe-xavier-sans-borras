import Cell from "./Cellclass.js/index.js";

describe("Given the class Cell", () => {
  describe("When it receives 1, 1 and 1", () => {
    test("Then it should return an object with the properties alive:true, x: 1 and y: 1", () => {
      const alive = 0;
      const x = 1;
      const y = 1;
      const expectedCell = new Cell(alive, x, y);

      const cell = new Cell(alive, x, y);

      expect(cell).toStrictEqual(expectedCell);
    });
  });
});
