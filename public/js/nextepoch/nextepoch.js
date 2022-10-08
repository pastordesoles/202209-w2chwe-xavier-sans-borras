const nextEpoch = (aliveCells, cell) => {
  if (cell.alive && (aliveCells === 2 || aliveCells === 3)) {
    cell.cellWillSurvive();
  } else if (!cell.alive && aliveCells === 3) {
    cell.cellWillSurvive();
  } else {
    cell.cellWillDie();
  }
};

export default nextEpoch;
