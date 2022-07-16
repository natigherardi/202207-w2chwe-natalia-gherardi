class Cell {
  willDie;
  isAlive;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

module.exports = Cell;
