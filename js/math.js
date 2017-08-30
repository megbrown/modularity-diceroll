"use strict";

module.exports = randomInt;

function randomInt (lowerBound, upperBound) {
	let num = Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound) + 1;
	return num;
};