#!/usr/bin/node
function add(a, b){
	return a+b;
}
const num1 = process.argv[2];
const num2 = process.argv[3];

if (isNaN(num1) || isNaN(num2)) {
	console.log('NaN');
}else{
	const result = add(Number(num1), Number(num2));
		console.log(result);
}
