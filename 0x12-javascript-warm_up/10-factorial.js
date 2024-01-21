#!/usr/bin/node

function factorial(n) {
	n = Number(n);
	if (isNaN(n)){
		return 1;
	}
if (n === 0 || n === 1) {
	return 1;
}else{
return n *factorial(n - 1);
}
}
const num = process.argv[2];
console.log(factorial(num));
