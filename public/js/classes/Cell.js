class Cell {
  willDie = false;
  isAlive;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

module.exports = Cell;
