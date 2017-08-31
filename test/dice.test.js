const { assert: { isFunction } } = require('chai');
const { toDiceNotation, roll } = require('../js/dice');

describe("dice", () => {
	describe("toDiceNotation is a function", () => {
		it("should exist", () => {
			isFunction(toDiceNotation);
		});
	});

	describe("roll is a function", () => {
		it("should exist", () => {
			isFunction(roll);
		});
	});


});