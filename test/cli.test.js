const { assert: { isFunction, exists, isArray } } = require('chai');
const { dice, total } = require('../js/cli.js');

const { argv: [,, ...args] } = process;
const { count, sides } = require('../js/parse-args')(args);
const { roll, toDiceNotation } = require('../js/dice');

describe("cli", () => {

	describe("dice", () => {
		it("should exist", () => {
			exists({dice});
		});
	});

	describe("count", () => {
		it("should exist", () => {
			exists({count});
		});
	});

	describe("sides", () => {
		it("should exist", () => {
			exists({count});
		});
	});

	describe("total", () => {
		it("should exist", () => {
			exists({total});
		});
	});

});
