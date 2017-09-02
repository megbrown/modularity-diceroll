const { assert: { isFunction, exists } } = require('chai');
const { count, sides } = require('../js/parse-args');

describe("parse-args", () => {
	describe("count and sides exist", () => {
		it("should exist", () => {
			exists({count});
			exists({sides});
		})
	})
})