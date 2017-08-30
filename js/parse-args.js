"use strict";

let [,, ...myArgs] = process.argv;

module.exports = (myArgs) => {
	if (myArgs) {
		let [count, sides] = myArgs;
		const diceObj = { count, sides };
	} else {
		console.log("something?");
	}

}