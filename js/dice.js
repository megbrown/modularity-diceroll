"use strict";

const randomInt = require('./math.js');

module.exports = {

	"toDiceNotation": ({count, sides}) => {
		let diceNotation = `${count}d${sides}`;
		return diceNotation;
	},

	"roll": (dice) => {
		let count = dice.split("d")[0];
		let sides = dice.split("d")[1];
		let lowerBound = count;
		let upperBound = sides * count;
		return randomInt(lowerBound, upperBound);
	}

};