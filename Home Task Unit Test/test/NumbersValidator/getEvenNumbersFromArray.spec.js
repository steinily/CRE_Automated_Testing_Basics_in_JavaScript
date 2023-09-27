const { expect } = require('chai');
const NumbersValidator = require('../../app/app');

describe('getEvenNumbersFromArray Positive Test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should return an array of even numbers', () => {
    const arrayOfNumbers = [2, 6, 11, 22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 6, 22]);
  });

  it('It should return an empty array if  there is no even number in the array ', () => {
    const arrayOfNumbers = [1, 3, 11, 21];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([]);
  });

  it('It should return an array of "zero" if provided by an array full of "zero"', () => {
    const arrayOfNumbers = [0, 0, 0, 0];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([0, 0, 0, 0]);
  });

  it('It should return an array of even numbers if negativ numbers provided', () => {
    const arrayOfNumbers = [-2, 6, 11, -22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([-2, 6, -22]);
  });

  it('It should return an empty array when the provided array is empty', () => {
    const validatorResult = validator.getEvenNumbersFromArray([]);
    expect(validatorResult).to.deep.equal([]);
  });

  it('It should return an array with a single even number', function () {
    const validatorResult = validator.getEvenNumbersFromArray([2]);
    expect(validatorResult).to.be.eql([2]);
  });

  it('It should return an empty array when input contains only non-integer numbers', function () {
    const validatorResult = validator.getEvenNumbersFromArray([1.5, 2.5, 3.5, 4.5]);
    expect(validatorResult).to.be.eql([]);
  });
});

describe('getEvenNumbersFromArray Negativ Test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should throw an error if array is not full of numbers', () => {
    const arrayOfValues = [5, '2', 11, 22];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5,2,11,22] is not an array of "Numbers"');
  });

  it('It should throw an error if there is no number in the array ', () => {
    const arrayOfValues = ['a', '2', 'c', 'G'];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[a,2,c,G] is not an array of "Numbers"');
  });

  it('It should throw an error if not provided an array ', () => {
    const arrayOfValues = 'Its a string';
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[Its a string] is not an array of "Numbers"');
  });

  it('It should throw an error for an input array containing mixed types', () => {
    const arrayOfValues = [1, '2', 3, null];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[1,2,3,] is not an array of "Numbers"');
  });
});
