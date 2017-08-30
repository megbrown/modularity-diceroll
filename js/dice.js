"use strict";

module.exports.diceObj = {};

diceObj.toDiceNotation = ({sides, count}) => {
	let diceNotation = `${sides}d${count}`;
};

diceObj.roll = (diceNotation) => {
	// accept a dice notation String and produce a random Number which is the
	// result of the dice roll
};
