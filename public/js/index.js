const Cell = require("./classes/Cell");
const Board = require("./classes/Board");

module.exports = Cell;
module.exports = Board;

const evaluateNeighburs = (rowIndex, columnIndex, board) => {
  let aliveCounter = 0;
  for (
    let variationInSuperiorArray = 0;
    variationInSuperiorArray < 2;
    variationInSuperiorArray + 1
  ) {
    for (
      let variationInSubarray = 0;
      variationInSubarray < 2;
      variationInSubarray + 1
    ) {
      const supossedCell = board.boxes[0][rowIndex + variationInSuperiorArray];
      if (
        supossedCell !== undefined &&
        supossedCell[columnIndex + variationInSubarray] !== undefined &&
        board.boxes[0][rowIndex + variationInSuperiorArray][
          columnIndex + variationInSubarray
        ].isAlive
      ) {
        aliveCounter += 1;
      }
    }
  }
  return aliveCounter;
};

const evaluateCell = (board) => {
  board.boxes.forEach((row, rowIndex) => {
    row.forEach((elementOfRow, columnIndex) => {
      const aliveNeighbours = evaluateNeighburs(rowIndex, columnIndex, board);
      return aliveNeighbours;
    });
  });
};
evaluateCell(board);
