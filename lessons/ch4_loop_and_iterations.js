// Loop and Iterations

// 1. for Loop
// syntax:
// for (initialization; condition; increment/decrement) {
//  // code block
// }
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Step: " + step);
}

let sum = 0;
console.log("Sum before loop: " + sum);
for (let i = 0; i < 5; i++) {
  sum = sum + i;
}
console.log("Sum after loop: " + sum);

let sum2 = 0;
console.log("Sum before loop: " + sum2);
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log("Sum after loop: " + sum2);

// 2. do while Loop
// syntax:
// do {
//  // code block
// } while (condition);
// e.g.
let i = 0;
do {
  i += 1;
  console.log("i: " + i);
} while (i < 5);

// 3. while Loop
// syntax:
// while (condition) {
// // code block
// }
// e.g.
let n = 0;
let j = 0;
while (n < 3) {
  n++;
  j += n;
}

console.log("j: " + j);

// break statement
// use the break statement to exit a loop
// syntax:
// break;
// e.g.
let a = [2, 3, 4, 5, 6];
let theValue = 4;
for (let i = 0; i < a.length; i++) {
  console.log("i: " + i + ", a[i]: " + a[i]);
  if (a[i] === theValue) {
    break;
  }
}

// continue statement
// use the continue statement to skip the current iteration of a loop
// syntax:
// continue;
// e.g.
let xx = 0;
let yy = 0;
while (xx < 5) {
  xx++;
  if (xx === 3) {
    continue;
  }
  yy += xx;
  console.log(yy);
}

// for...in loop
// syntax:
// for (variable in object) {
// // code block
// }

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
for (let fruit in fruits) {
  console.log("for in " + fruit);
}

// for...of loop
// syntax:
// for (variable of object) {
// // code block
// }
for (let fruit of fruits) {
  console.log("for of " + fruit);
}
