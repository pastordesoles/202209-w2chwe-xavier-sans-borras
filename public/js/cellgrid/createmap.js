import Cell from "../cellclass/classcell.js";

const createMap = (rowCount, columnCount) => {
  const map = [];

  for (let x = 0; x < rowCount; x++) {
    for (let y = 0; y < columnCount; y++) {
      if (
        (x === 1 && y === 0) ||
        (x === 1 && y === 1) ||
        (x === 1 && y === 2) ||
        (x === 4 && y === 8) ||
        (x === 4 && y === 9) ||
        (x === 4 && y === 10) ||
        (x === 5 && y === 7) ||
        (x === 5 && y === 8) ||
        (x === 5 && y === 9) ||
        (x === 11 && y === 3) ||
        (x === 11 && y === 4) ||
        (x === 11 && y === 5) ||
        (x === 11 && y === 6) ||
        (x === 14 && y === 3) ||
        (x === 14 && y === 4) ||
        (x === 14 && y === 5) ||
        (x === 14 && y === 6) ||
        (x === 11 && y === 11) ||
        (x === 11 && y === 12) ||
        (x === 12 && y === 11) ||
        (x === 12 && y === 12) ||
        (x === 13 && y === 13) ||
        (x === 13 && y === 14) ||
        (x === 14 && y === 14) ||
        (x === 14 && y === 13)
      ) {
        const cell = new Cell(1, x, y);
        map[x] = map[x] || [];
        map[x][y] = cell;
      } else {
        const cell = new Cell(0, x, y);
        map[x] = map[x] || [];
        map[x][y] = cell;
      }
    }
  }
  return map;
};

export default createMap;
