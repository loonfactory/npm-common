import MathExtension from "../src/MathExtension";

describe('MathExtension', () => {
  describe('round', () => {
    test("1", () => {
      expect(MathExtension.round(1)).toEqual(1);
      expect(MathExtension.round(1.1)).toEqual(1);
      expect(MathExtension.round(1.5)).toEqual(2);
      expect(MathExtension.round(1.01, 1)).toEqual(1);
      expect(MathExtension.round(1.05, 1)).toEqual(1.1);
      expect(MathExtension.round(1.45, 1)).toEqual(1.5);
      expect(MathExtension.round(1.02)).toEqual(1);
    });
  })
});