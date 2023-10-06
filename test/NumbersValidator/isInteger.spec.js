const { expect } = require('chai');
const NumbersValidator = require('../../app/app');

describe('isInteger Positive Test', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });
    afterEach(() => {
        validator = null;
    });

    it('It should return true when provided with positive number', () => {
        const range = 1000;
        const number = Math.floor((Math.random() * range) / 2) * 2;
        const validatorResult = validator.isInteger(number);
        expect(validatorResult).to.be.equal(true);
    });

    it('It should return true when provided with negativ number', () => {
        const range = 1000;
        const number = 0 - Math.floor((Math.random() * range) / 2) * 2;
        const validatorResult = validator.isInteger(number);
        expect(validatorResult).to.be.equal(true);
    });

    it('It should return true when provided with Zero', () => {
        const validatorResult = validator.isInteger(0);
        expect(validatorResult).to.be.equal(true);
    });
});

describe('isInteger Negativ Test', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });
    afterEach(() => {
        validator = null;
    });

    it('It should return false when provided with positive decimal number', () => {
        const validatorResult = validator.isInteger(0.5);
        expect(validatorResult).to.be.equal(false);
    });

    it('It should return false when provided with negativ decimal number', () => {
        const validatorResult = validator.isInteger(-124.1);
        expect(validatorResult).to.be.equal(false);
    });

    it('It should throw an error when provided with a string', () => {
        expect(() => {
            validator.isInteger('banana');
        }).to.throw('[banana] is not a number');
    });

    it('It should throw an error when provided with a object', () => {
        expect(() => {
            validator.isInteger({});
        }).to.throw('[[object Object]] is not a number');
    });
    it('It should throw an error when provided with a array', () => {
        expect(() => {
            validator.isInteger([]);
        }).to.throw('[] is not a number');
    });

    it('It should return false when provided with Infinity', () => {
        const validatorResult = validator.isInteger(Infinity);
        expect(validatorResult).to.be.equal(false);
    });

    it('It should return true when provided with NaN', () => {
        const validatorResult = validator.isInteger(NaN);
        expect(validatorResult).to.be.equal(false);
    });

    it('It should throw an error when provided with a null', () => {
        expect(() => {
            validator.isInteger([]);
        }).to.throw('[] is not a number');
    });
    it('It should throw an error when provided with a undefined', () => {
        expect(() => {
            validator.isInteger([]);
        }).to.throw('[] is not a number');
    });
});
