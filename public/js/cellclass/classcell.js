class Cell {
  alive;
  willBeAlive = false;

  constructor(randomNumber, x, y) {
    if (randomNumber === 0) {
      this.alive = false;
    } else {
      this.alive = true;
    }
    this.x = x;
    this.y = y;
    this.icon = this.alive ? "*" : "·";
  }

  cellIsDead() {
    this.alive = false;
  }

  cellWillSurvive() {
    this.willBeAlive = true;
  }

  cellWillDie() {
    this.willBeAlive = false;
  }
}

export default Cell;
