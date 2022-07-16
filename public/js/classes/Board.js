const Cell = require("./Cell");

class Board {
  columns;
  rows;
  boxes;

  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.columns).fill(
      new Array(this.rows).fill(new Cell())
    );
    return boxes;
  }
}

module.exports = Board;
