const add = 1 + 2;
const subtract = 5 - 3;
const multiply = 4 * 2;
const divide = 8 / 2;
const modulus = 10 % 3;
const exponentiation = 2 ** 3;
let increment = 1;
let decrement = 1;
increment++;
decrement--;

console.log(`Addition: ${add}`);
console.log(`Subtraction: ${subtract}`);
console.log(`Multiplication: ${multiply}`);
console.log(`Division: ${divide}`);
console.log(`Modulus: ${modulus}`);
console.log(`Exponentiation: ${exponentiation}`);
console.log("=========================");
console.log(`Negation: ${-add}`);
console.log(`Positive: ${+subtract}`);
console.log(`Increment: ${increment}`);
console.log(`Decrement: ${decrement}`);
console.log("=========================");

let value = 10;
console.log(`Value: ${value}`);
console.log(`Postfix Increment: ${value++}`);
console.log(`After Postfix Increment: ${value}`);
console.log(`Prefix Increment: ${++value}`);
console.log(`After Prefix Increment: ${value}`);
console.log("=========================");

// Assignment Operators
let num = 5;
console.log(`Initial x: ${num}`);
num += 3; // num = num + 3
console.log(`After num += 3: ${num}`);
num -= 2; // num = num - 2
console.log(`After num -= 2: ${num}`);
num *= 4; // num = num * 4
console.log(`After num *= 4: ${num}`);
num /= 2; // num = num / 2
console.log(`After num /= 2: ${num}`);
num %= 3; // num = num % 3
console.log(`After num %= 3: ${num}`);
num **= 2; // num = num ** 2
console.log(`After num **= 2: ${num}`);

// Comparison Operators
const a = 10;
const b = "10";

console.log(`a: ${a} has type ${typeof a}, b: ${b} has type ${typeof b}`);

console.log(`a == b: ${a == b}`); // true
console.log(`a === b: ${a === b}`); // false
console.log(`a != b: ${a != b}`); // false
console.log(`a !== b: ${a !== b}`); // true
console.log(`a > 5: ${a > 5}`); // true
console.log(`a < 5: ${a < 5}`); // false
console.log(`a >= 10: ${a >= 10}`); // true
console.log(`a <= 9: ${a <= 9}`); // false


// Logical Operators
const x = true;
const y = false;

console.log(`x: ${x}, y: ${y}`);

console.log(`x && y: ${x && y}`); // false
console.log(`x || y: ${x || y}`); // true
console.log(`!x: ${!x}`); // false
console.log(`!y: ${!y}`); // true
console.log(`(x && !y) || (!x && y): ${(x && !y) || (!x && y)}`); // true

const e = 5;
const f = 10;
const g = 15;

console.log(`e: ${e}, f: ${f}, g: ${g}`);

console.log(`(e < f) && (f < g): ${(e < f) && (f < g)}`); // true
console.log(`(e > f) || (f < g): ${(e > f) || (f < g)}`); // true
console.log(`!(e === 5): ${!(e === 5)}`); // false






