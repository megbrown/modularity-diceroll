const { assert: { isFunction, isNumber, isFinite, isNaN } } = require('chai');
const randomInt = require('../js/math');

describe("math", () => {
	describe("math a function", () => {

		it("should exist", () => {
			isFunction(randomInt);
		});

		it("should return NaN", () => {
			isNaN(randomInt());
		});

		it("should take two values and return a number", () => {
			isFinite(randomInt(3, 5));
		});

		it("should return NaN if values are not numbers", () => {
			isNaN(randomInt("yo", "8y"));
		});

	});
});