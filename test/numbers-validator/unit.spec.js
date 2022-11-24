/* eslint-disable max-len */
const NumbersValidator = require('../../app/numbers-validator');
const {expect} = require('chai');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [4, true],
    [-10, true],
    [0, true],
    [5, false],
    [-3, false],
  ];
  arr.forEach((element) => {
    it(`should return true with an even number or false with an odd number: [${element[0]}] is [${element[1]}]`, () => {
      expect(validator.isNumberEven(element[0])).to.deep.equal(element[1]);
    });
  });

  const arr2 = [
    [true],
    [{type: 'Even'}],
    [null],
    [1234567890123456789012345678901234567890n],
    [undefined],
    ['I am even number'],
  ];
  arr2.forEach((element) => {
    it('should throw an error when provided type is not type of "Number"', () => {
      expect(() => {
        validator.isNumberEven((element[0]));
      }).to.throw(`[${element[0]}] is not of type "Number"`);
    });
  });
});

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  const arr = [
    [[2, 7, -12, 0, 1, -55, 32, 10], [2, -12, 0, 32, 10]],
    [[160, 13, -8, 1], [160, -8]],
  ];
  arr.forEach((element) => {
    it(`should return an array of even numbers - [${element[1]}]`, () => {
      expect(validator.getEvenNumbersFromArray(element[0])).to.deep.equal(element[1]);
    });
  });

  const arr2 = [
    [[-12, 199, null]],
    [[-1452, 11, 'cat']],
    [[145, {type: 'Andromeda'}]],
    [[54, 0, false]],
    [[100, 1234567890123456789012345678901234567890n]],
    [[-6996, undefined]],
    ['js'],
  ];
  arr2.forEach((element) => {
    it('should throw an error when an array is not an array of numbers', () => {
      expect(() => {
        validator.getEvenNumbersFromArray((element[0]));
      }).to.throw(`[${element[0]}] is not an array of "Numbers"`);
    });
  });
});

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [[456, 0, Infinity], true],
    [[100, undefined], false],
    [[-1, 12, null], false],
    [[-14, 'cat', 145], false],
    [[4, 5, -19, 8, -43, 100], true],
  ];
  arr.forEach((element) => {
    it(`should return true with an array of numbers or false when an array is not an array of numbers - [${element[1]}]`, () => {
      expect(validator.isAllNumbers(element[0])).to.deep.equal(element[1]);
    });
  });

  const arr2 = [
    [1],
    [true],
    [{type: 'Fiat'}],
    [null],
    [1234567890123456789012345678901234567890n],
    [undefined],
    ['js'],
  ];
  arr2.forEach((element) => {
    it('should throw an error when provided not an array', () => {
      expect(() => {
        validator.isAllNumbers((element[0]));
      }).to.throw(`[${element[0]}] is not an array`);
    });
  });
});

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [7, true],
    [-50, true],
    [0, true],
  ];
  arr.forEach((element) => {
    it(`should return true when provided with an integer - [${element[0]}]`, () => {
      expect(validator.isInteger(element[0])).to.deep.equal(element[1]);
    });
  });

  const arr2 = [
    [null],
    ['meaw'],
    [[-100, -43, -54, -18]],
    [{type: 'Whale'}],
    [1234567890123456789012345678901234567890n],
    [false],
  ];
  arr2.forEach((element) => {
    it('should throw an error when provided data not a number', () => {
      expect(() => {
        validator.isInteger((element[0]));
      }).to.throw(`[${element[0]}] is not a number`);
    });
  });
});
