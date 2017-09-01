const { assert: { isFunction, isNumber } } = require('chai');
const randomInt = require('../js/math');

describe("math", () => {
	describe("math a function", () => {
		it("should exist", () => {
			isFunction(randomInt());
		});

		it("should return an number", () => {
			isNumber(randomInt());
		});
	});
});