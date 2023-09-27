const { expect } = require('chai');
const NumbersValidator = require('../../app/app');

describe('isAllNumbers Positive Test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should return true when provided array of numbers', () => {
    const arrayOfNumbers = [2, 6, 11, 22];
    const evenNumbersArray = validator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql(true);
  });

  it('It should return true when provided of array of zero', () => {
    const arrayOfNumbers = [0, 0, 0, 0];
    const evenNumbersArray = validator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql(true);
  });

  it('It should return true when provided with negativ numbers array', () => {
    const arrayOfNumbers = [-2, -6, -11, -22];
    const evenNumbersArray = validator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql(true);
  });

  it('It should return true when provided whit empty array', () => {
    const validatorResult = validator.isAllNumbers([]);
    expect(validatorResult).to.deep.eql(true);
  });

  it('It should return true when all elements in the array are floating-point numbers', function () {
    const validatorResult = validator.isAllNumbers([1.5, 2.25, 3.75]);
    expect(validatorResult).to.eql(true);
  });

  it('It should return true when the array contains only one number', function () {
    const validatorResult = validator.isAllNumbers([42]);
    expect(validatorResult).to.eql(true);
  });

  it('It should return true when at least one element in the array is Infinity', function () {
    const arrayOfValues = [1, 2, Infinity, 4];
    const validatorResult = validator.isAllNumbers(arrayOfValues);
    expect(validatorResult).to.eql(true);
  });
  it('It should return true when at least one element in the array is NaN', function () {
    const arrayOfValues = [1, 2, NaN, 4];
    const validatorResult = validator.isAllNumbers(arrayOfValues);
    expect(validatorResult).to.eql(true);
  });
});

describe('isAllNumbers Negative Test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should throw an error if not an array a string is provided', () => {
    const arrayOfValues = 'Hello World';
    expect(() => {
      validator.isAllNumbers(arrayOfValues);
    }).to.throw('[Hello World] is not an array');
  });

  it('It should throw an error if not an array ,a number is provided', () => {
    const arrayOfValues = 2;
    expect(() => {
      validator.isAllNumbers(arrayOfValues);
    }).to.throw('[2] is not an array');
  });

  it('It should return false if array is not full of numbers', () => {
    const arrayOfValues = [2, '3', 4, 'banana'];
    const validatorResult = validator.isAllNumbers(arrayOfValues);
    expect(validatorResult).to.be.eql(false);
  });

  it('It should return false when the array contains a null element', function () {
    const arrayOfValues = [1, 2, 3, null];
    const validatorResult = validator.isAllNumbers(arrayOfValues);
    expect(validatorResult).to.eql(false);
  });

  it('It should return false when the array contains an undefined element', function () {
    const arrayOfValues = [1, 2, 3, undefined];
    const validatorResult = validator.isAllNumbers(arrayOfValues);
    expect(validatorResult).to.eql(false);
  });
});
