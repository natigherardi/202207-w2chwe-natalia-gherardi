const Cell = require("./classes/Cell");
const Board = require("./classes/Board");

const newBoard = new Board(3, 3);
const positionOfCells = (board) => {
  const arrayOfPositions = [];
  board.boxes.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const positionSubArray = [];
      positionSubArray.push([rowIndex]);
      positionSubArray.push([columnIndex]);
      arrayOfPositions.push(positionSubArray);
    });
  });
  return arrayOfPositions;
};

const arrayOfPositions = positionOfCells(newBoard);
const cellPosition = arrayOfPositions[0][0];
console.log(newBoard.boxes[0][cellPosition]);

module.exports = Cell;
module.exports = Board;
