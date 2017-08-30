"use strict";

module.exports.randomInt = (lowerBound, upperBound) => {
	let num = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
	return num;
}