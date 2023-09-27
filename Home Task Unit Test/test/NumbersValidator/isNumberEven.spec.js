const { expect } = require('chai');
const NumbersValidator = require('../../app/app');

describe('isNumberEven Positive Test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should return true when provided whit positive even number', () => {
    const range = 1000;
    const number = Math.floor(((Math.random() * range) / 2)) * 2;
    const validatorResult = validator.isNumberEven(number);
    expect(validatorResult).to.be.equal(true);
  });
  it('It should return false when provided whit positive odd number', () => {
    const range = 1000;
    const number = (Math.floor(((Math.random() * range) / 2)) * 2) + 1;
    const validatorResult = validator.isNumberEven(number);
    expect(validatorResult).to.be.equal(false);
  });
  it('It should return false  when provided whit number zero', () => {
    const validatorResult = validator.isNumberEven(0);
    expect(validatorResult).to.be.equal(true);
  });
  it('It should return true when provided whit negativ even number', () => {
    const range = 1000;
    const number = 0 - (Math.floor((Math.random() * range) / 2)) * 2;
    const validatorResult = validator.isNumberEven(number);
    expect(validatorResult).to.be.equal(true);
  });
  it('It should return false when provided whit negative odd number', () => {
    const range = 1000;
    const number = 0 - (Math.floor(((Math.random() * range) / 2)) * 2) + 1;
    const validatorResult = validator.isNumberEven(number);
    expect(validatorResult).to.be.equal(false);
  });
  it('It should return true for positive decimal even numbers', function () {
    const validatorResult = validator.isNumberEven(4.0);
    expect(validatorResult).to.equal(true);
  });
});

describe('isNumber Negative Testing', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should throw an error message when provided with string', () => {
    expect(() => {
      validator.isNumberEven('Hello World');
    }).to.throw('[Hello World] is not of type "Number" it is of type "string"');
  });

  it('It should throw an error message when provided with number as string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
  it('It should throw an error message when provided with array', () => {
    expect(() => {
      validator.isNumberEven([1, 2, 3, 4]);
    }).to.throw('[1,2,3,4] is not of type "Number" it is of type "object"');
  });

  it('It should throw an error message when provided with Null', () => {
    expect(() => {
      validator.isNumberEven(null);
    }).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it('It should throw an error message when provided with undefined', () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('It should throw an error message when provided with Nan', () => {
    const validatorResult = validator.isNumberEven(NaN);
    expect(validatorResult).to.deep.eql(false);
  });
  it('It should return false for positive decimal odd numbers', function () {
    const validatorResult = validator.isNumberEven(3.5);
    expect(validatorResult).to.equal(false);
  });

  it('It should return false for Infinity', function () {
    const validatorResult = validator.isNumberEven(Infinity);
    expect(validatorResult).to.equal(false);
  });

  it('It should return false for negativ Infinity', function () {
    const validatorResult = validator.isNumberEven(-Infinity);
    expect(validatorResult).to.equal(false);
  });

  it('It should throw an error message when provided with empty array', function () {
    expect(() => {
      validator.isNumberEven([]);
    }).to.throw('[] is not of type "Number" it is of type "object"');
  });

  it('It should throw an error message when provided with empty object', function () {
    expect(() => {
      validator.isNumberEven({});
    }).to.throw('[[object Object]] is not of type "Number" it is of type "object"');
  });
});
