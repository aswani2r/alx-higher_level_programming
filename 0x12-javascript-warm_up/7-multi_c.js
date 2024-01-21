#!/usr/bin/node
let numOccurrences = process.argv[2];
if (isNaN(numOccurrences)) {
	console.log("Missing number of occurrences");
} else {
	numOccurrences = Number(numOccurrences);
	for (let i =0; i < numOccurrences; i++) {
		console.log("C is fun");
	}
}
