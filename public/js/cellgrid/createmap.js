const createMap = (rowCount, columnCount) => {
  const map = [];

  for (let x = 0; x < rowCount; x++) {
    for (let y = 0; y < columnCount; y++) {
      map[x] = map[x] || [];
      map[x][y] = 0;
    }
  }
  return map;
};

export default createMap;
