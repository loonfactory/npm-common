import "../src/JsExtensions";

describe('JsExtensions', () => {
  describe('Array', () => {
    it("returns a set number of", () => {
      expect([1, 2, 3, 4, 5].take(3)).toEqual([1, 2, 3])
    })
  })
});