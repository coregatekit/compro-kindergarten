// Expression and Operators

// 1. Arithmetic operators

console.log('===== Addition (+) =====');
// Addition (+)
const a = 10;
const b = 20;
const c = a + b;
console.log(`${a} + ${b} = ${c}`); // 30

console.log('===== Addition assignment (+=) =====');
// Addition assignment (+=)
let d = 10;
d += 20;
console.log('d = ', d); // 30

console.log('===== Subtraction (-) =====');
// Subtraction (-)
const e = 20;
const f = 10;
const g = e - f;
console.log(`${e} - ${f} = ${g}`); // 10

console.log('===== Subtraction assignment (-=) =====');
// Subtraction assignment (-=)
let h = 20;
h -= 10;
console.log('h = ', h); // 10

console.log('===== Multiplication (*) =====');
// Multiplication (*)
const i = 10;
const j = 20;
const k = i * j;
console.log(`${i} * ${j} = ${k}`); // 200

console.log('===== Multiplication assignment (*=) =====');
// Multiplication assignment (*=)
let l = 10;
l *= 20;
console.log('l = ', l); // 200

console.log('===== Division (/) =====');
// Division (/)
const m = 20;
const n = 10;
const o = m / n;
console.log(`${m} / ${n} = ${o}`); // 2

console.log('===== Division assignment (/=) =====');
// Division assignment (/=)
let p = 20;
p /= 10;
console.log('p = ', p); // 2

console.log('===== Modulus (%) =====');
// Modulus (%)
const q = 20;
const r = 10;
const s = q % r;
console.log(`${q} % ${r} = ${s}`); // 0

const t = 21;
const u = 10;
const v = t % u;
console.log(`${t} % ${u} = ${v}`); // 1

console.log('===== Modulus assignment (%=) =====');
// Modulus assignment (%=)
let w = 20;
w %= 10;
console.log('w = ', w); // 0

console.log('===== Increment (++) =====');
// Increment (++)
let x = 10;
x++;
console.log('x = ', x); // 11

console.log('===== Decrement (--) =====');
// Decrement (--)
let y = 10;
y--;
console.log('y = ', y); // 9

console.log('===== Pre and Post Increment/Decrement =====');
// Pre and Post Increment/Decrement
let z: number;
let aa: number;

console.log('===== Post Increment =====');
// Post Increment/Decrement
z = 10;
aa = z++;
console.log('z = ', z); // 11
console.log('aa = ', aa); // 10

console.log('===== Post Decrement =====');
z = 10;
aa = z--;
console.log('z = ', z); // 9

console.log('===== Pre Increment =====');
// Pre Increment/Decrement
z = 10;
aa = ++z;
console.log('z = ', z); // 11
console.log('aa = ', aa); // 11

console.log('===== Pre Decrement =====');
z = 10;
aa = --z;
console.log('z = ', z); // 9
console.log('aa = ', aa); // 9

console.log('===== Exponentiation (**) =====');
// Exponentiation (**)
const ab = 2;
const ac = 3;
const ad = ab ** ac;
console.log(`${ab} ** ${ac} = ${ad}`); // 8

console.log('===== Exponentiation assignment (**=) =====');
// Exponentiation assignment (**=)
let ae = 2;
ae **= 3;
console.log('ae = ', ae); // 8

// Void operator
console.log('===== Void operator (void) =====');
const af = 10;
const ag = void af;
console.log('ag = ', ag); // undefined
console.log('The void operator evaluates the given expression and then returns undefined.');