const nextEpoch = (aliveCells, cell) => {
  if (cell.alive && (aliveCells === 2 || aliveCells === 3)) {
    return cell.cellWillSurvive();
  }
  if (!cell.alive && aliveCells === 3) {
    return cell.cellWillSurvive();
  }
  return cell.cellWillDie();
};

export default nextEpoch;
