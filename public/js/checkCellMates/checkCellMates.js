const checkCellMates = (grid, cellToCheck) => {
  const cellToCheckX = cellToCheck.x;
  const cellToCheckY = cellToCheck.y;

  let totalAlive = 0;

  const directions = {
    top: grid[cellToCheckX - 1]?.[cellToCheckY - 1] || 0,
    topmid: grid[cellToCheckX - 1]?.[cellToCheckY] || 0,
    topright: grid[cellToCheckX - 1]?.[cellToCheckY + 1] || 0,
    midleft: grid[cellToCheckX]?.[cellToCheckY - 1] || 0,
    midright: grid[cellToCheckX]?.[cellToCheckY + 1] || 0,
    bottomleft: grid[cellToCheckX + 1]?.[cellToCheckY - 1] || 0,
    bottommid: grid[cellToCheckX + 1]?.[cellToCheckY] || 0,
    bottomright: grid[cellToCheckX + 1]?.[cellToCheckY + 1] || 0,
  };

  const directionsArray = Object.values(directions);
  directionsArray.forEach((direction) => {
    if (direction.alive) {
      totalAlive++;
    }
  });
  return totalAlive;
};

export default checkCellMates;
