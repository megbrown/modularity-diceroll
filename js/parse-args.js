"use strict";

module.exports = (args) => {
	if (args) {
		let [count, sides] = args;
		const diceObj = { count, sides };
		return diceObj;
	} else {
		console.log("something?");
	}
}