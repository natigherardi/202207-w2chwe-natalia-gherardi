const Board = require("../classes/Board");

describe("Given the Board class constructor", () => {
  describe("When it's called it receives 1 and 1 as parameter values", () => {
    test("Then it should return an instance of Board class with propery 'boxes' that as value has an array with a sub-array that contains an instance of Cell class with both propertys willDie and isAlive with value false", () => {
      const parameterColumn = 1;
      const parameterRow = 1;
      const expectedBoard = {
        boxes: [[{ willDie: false, isAlive: false }]],
        columns: 1,
        rows: 1,
      };

      const newBoard = new Board(parameterColumn, parameterRow);

      expect(newBoard).toEqual(expectedBoard);
    });
  });
});
