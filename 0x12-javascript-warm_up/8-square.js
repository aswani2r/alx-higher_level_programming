#!/usr/bin/node

let size = process.argv[2].trim();
if (isNaN(size)) {
	console.log('Missing size');
}else{
	size = Number(size);
	let row = '';
	for(let i = 0; i < size; i++) {
		row += 'X';
	}
	for (let i = 0; i < size;i++){
		console.log(row);
	}
}
