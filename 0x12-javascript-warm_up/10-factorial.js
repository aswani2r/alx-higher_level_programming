#!/usrt/bin/node

function factorial(n) {
	if (isNaN(n)){
		return 1;
	}
n = Number(n);
if (n === 0 || n === 1) {
	return 1;
}else{
return n *factorial(n - 1);
}
}
const num = process.argv[2];
console.log(factorial(num));
