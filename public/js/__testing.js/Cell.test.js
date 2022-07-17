const Cell = require("../classes/Cell");

describe("Given the Cell class constructor", () => {
  describe("When its called it receives the parameter true", () => {
    test("Then it should return an instanced Cell object with the propertie isAlive as true and the property willDie false", () => {
      const expectedCell = { willDie: false, isAlive: true };

      const cell = new Cell(true);

      expect(cell).toEqual(expectedCell);
    });
  });
});
