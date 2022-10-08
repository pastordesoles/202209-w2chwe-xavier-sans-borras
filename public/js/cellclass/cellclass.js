class Cell {
  alive;

  constructor(randomNumber, x, y) {
    if (randomNumber === 0) {
      this.alive = false;
    } else {
      this.alive = true;
    }
    this.x = x;
    this.y = y;
  }
}

export default Cell;
