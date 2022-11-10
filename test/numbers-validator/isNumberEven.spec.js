const NumbersValidator = require("../../app/numbers-validator");
const { expect } = require("chai");

describe("isNumberEven positive tests", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it("should return true when provided with an even number", () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it("should return false when provided with an even number", () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.isNumberEven("4");
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});

describe("getEvenNumbersFromArray", function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  it("should return an array of even numbers when provided with proper data", function () {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([
      2, 12, 32, 10,
    ]);
  });

  //throw an error

  it("should return false when an array is not an array of numbers", () => {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfRandomNumbers);
    }).to.throw('[2, 7, 12, 17, 1, 55, 32, 10] is not an array of "Numbers"');
  });
});

describe("isAllNumbers", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it("should return true when provided with an integer", () => {
    const arrayOfNumbers = [4, 5, 19, 8];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(true);
  });

  //throw an error

  it("should return false when provided not an array", () => {
    const arrayOfNumbers = [4, "5", 19, 8];
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw("[4, 5, 19, 8] is not an array of numbers");
  });
});

describe("isInteger", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it("should return true when provided with an integer", () => {
    const isInt = validator.isInteger(4);
    expect(isInt).to.be.equal(true);
  });

  //throw an error

  it("should throw an error when provided data not a number", () => {
    expect(() => {
      validator.isInteger("9");
    }).to.throw("[9] is not a number");
  });
});
