export default class MathExtension {
  static round(value: number): number;
  static round(value: number, digits: number): number;
  static round(value: number, digits?: number) {
    digits = Math.trunc(digits ?? 0);
    let square = Math.pow(10, digits);

    return Math.round(value * square) / square;
  }
}