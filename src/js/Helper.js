export default class Helper {
  static getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}