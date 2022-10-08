import Cell from "../cellclass/classcell.js";
// import generateRandomNumber from "../cellclass/randomNumber.js";

const createMap = (rowCount, columnCount) => {
  const map = [];

  for (let x = 0; x < rowCount; x++) {
    for (let y = 0; y < columnCount; y++) {
      if (
        (x === 1 && y === 0) ||
        (x === 1 && y === 1) ||
        (x === 1 && y === 2)
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
