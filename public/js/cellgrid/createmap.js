import Cell from "../cellclass/Cellclass.js";
import generateRandomNumber from "../cellclass/randomNumber.js";

const createMap = (rowCount, columnCount) => {
  const map = [];

  for (let x = 0; x < rowCount; x + 1) {
    for (let y = 0; y < columnCount; y + 1) {
      const cell = new Cell(generateRandomNumber(), x, y);
      map[x] = map[x] || [];
      map[x][y] = cell;
    }
  }
  return map;
};

export default createMap;
