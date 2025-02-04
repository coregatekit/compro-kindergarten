// Loop and iterations

// for loop
// syntax: for (initialization; condition; increment/decrement) { code block }
console.log('===== For loop =====');
for (let step = 0; step < 5; step++) {
	// Run 5 times,with values of step from 0 through 4.
	console.log(step);
}

console.log('===== For loop sum =====');
let sum = 0;
console.log('Sum before loop:', sum);
for (let i = 1; i <= 5; i++) {
	console.log('Round:', i, 'Sum:', sum);
	sum += i;
}
console.log('Sum after loop:', sum);

console.log('===== For loop sum with condition =====');
sum = 0;
console.log('Sum before loop:', sum);
for (let i = 0; i < 5; i++) {
	console.log('Round:', i, 'Sum:', sum);
	if (i % 2 === 0) {
		sum += i;
	}
}
console.log('Sum after loop:', sum);

// while loop
// syntax: while (condition) { code block }
console.log('===== While loop =====');
let count = 0;
while (count < 5) {
	console.log(count);
	count++;
}

// do while loop
// syntax: do { code block } while (condition)
console.log('===== Do while loop =====');
count = 0;
do {
	console.log(count);
	count++;
} while (count < 5);

// continue statement
console.log('===== Continue statement =====');
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}

// break statement
console.log('===== Break statement =====');
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		break;
	}
	console.log(i);
}

// for...in loop
// syntax: for (variable in object) { code block }
console.log('===== For...in loop =====');
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit in fruits) {
    console.log(`Index: ${fruit}, Value: ${fruits[fruit]}`);
}

// for...of loop
// syntax: for (variable of object) { code block }
console.log('===== For...of loop =====');
for (let fruit of fruits) {
    console.log(fruit);
}
