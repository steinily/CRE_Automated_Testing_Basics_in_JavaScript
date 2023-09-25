/**
 * A simpe class containing methods for validationg numbers
 *
 * @class NumbersValidator
 */

// eslint-disable-next-line require-jsdoc
export class NumbersValidator {
  /**
  * Creates an insance of NumbersValidator
  * @memberof NumbersValidator
  */
  constructor() {
  };

  /**
 *
 *
 * @param {Number} number number to check
 * @return {Boolean} true if element is even
 * @memberof NumbersValidator
 */

  // eslint-disable-next-line require-jsdoc
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
 *
 *
 * @param {Arra<Number>} arrayOfNumbers array of numbers to go throught
 * @return {Array<Number>} array of even numbers
 * @memberof NumbersValidator
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
};
