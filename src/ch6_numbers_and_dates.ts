// Numbers and Dates

// Numbers
// The built-in number type in TypeScript is the same as in JavaScript.
// It is a double-precision 64-bit binary format IEEE 754 value (number).
// It can represent both integer and floating-point numbers.

console.log('===== Numbers =====');
const biggestNumber: number = Number.MAX_VALUE;
const smallestNumber: number = Number.MIN_VALUE;
const positiveInfinity: number = Number.POSITIVE_INFINITY;
const negativeInfinity: number = Number.NEGATIVE_INFINITY;
const notANumber: number = Number.NaN;

console.log(biggestNumber); // 1.7976931348623157e+308
console.log(smallestNumber); // 5e-324
console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(notANumber); // NaN

// Parsing numbers
console.log('===== Parsing Numbers =====');
// The parseInt() and parseFloat() functions are used to parse strings into numbers.
// The parseInt() function parses a string and returns an integer.
// The parseFloat() function parses a string and returns a floating-point number.

const txtTen = '10';
const intTen = Number.parseInt(txtTen);
const floatTen = Number.parseFloat(txtTen);
console.log(`Integer ${txtTen} is ${intTen} and type is ${typeof intTen}`); // 10
console.log(`Float ${txtTen} is ${floatTen} and type is ${typeof floatTen}`); // 10

const txtTen2 = '10.123456789';
const intTen2 = Number.parseInt(txtTen2);
const floatTen2 = Number.parseFloat(txtTen2);
console.log(`Integer ${txtTen2} is ${intTen2} and type is ${typeof intTen2}`); // 10
console.log(`Float ${txtTen2} is ${floatTen2} and type is ${typeof floatTen2}`); // 10.123456789
console.log(
	`Float ${txtTen2} is ${floatTen2.toFixed(4)} and type is ${typeof floatTen2}`,
); // 10.1235

// Method in Number
console.log('===== Method in Number =====');
// The Number object has a number of useful methods.
// The toFixed() method formats a number using fixed-point notation.
// The toPrecision() method formats a number to a specified length.
// The toString() method returns a number as a string.
// The valueOf() method returns the primitive value of a Number object.

const num = 10.123456789;
console.log('Type of num:', typeof num); // number
console.log(num.toFixed(2)); // 10.12
console.log(num.toPrecision(2)); // 10
console.log(num.toPrecision(4)); // 10.12
console.log(num.toPrecision(6)); // 10.1235
console.log((12345.67890123).toPrecision(8)); // 12345.679
console.log(num.toString()); // 10.123456789
console.log('typeof num.toString() is', typeof num.toString()); // string
console.log(num.valueOf()); // 10.123456789

// Math
console.log('===== Math =====');
// The Math object provides a number of useful properties and methods for mathematical operations.
// The Math object has no constructor, so you cannot create a new Math object.
// All properties and methods of Math are static.
// You always use it as Math.property or Math.method().
// The Math object has properties and methods for mathematical constants and functions.

console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951

// Math methods
// The Math object has a number of useful methods.
// The abs() method returns the absolute value of a number.
// The round() method rounds a number to the nearest integer.
// The floor() method rounds a number down to the nearest integer.
// The ceil() method rounds a number up to the nearest integer.
// The random() method returns a random number between 0 (inclusive) and 1 (exclusive).

// abs()
console.log('===== Math.abs() =====');
// The abs() method returns the absolute value of a number.
const number1 = 10.12345;
const number2 = -10.12345;
console.log(Math.abs(number1)); // 10.12345
console.log(Math.abs(number2)); // 10.12345

// round()
// The round() method rounds a number to the nearest integer.
console.log('===== Math.round() =====');
console.log(Math.round(number1)); // 10
console.log(Math.round(number2)); // -10
const number3 = 10.5;
const number4 = 10.4;
console.log(Math.round(number3)); // 11
console.log(Math.round(number4)); // 10

// floor()
// The floor() method rounds a number down to the nearest integer.
console.log('===== Math.floor() =====');
console.log(Math.floor(number1)); // 10
console.log(Math.floor(number2)); // -11
console.log(Math.floor(number3)); // 10
console.log(Math.floor(number4)); // 10

// ceil()
// The ceil() method rounds a number up to the nearest integer.
console.log('===== Math.ceil() =====');
console.log(Math.ceil(number1)); // 11
console.log(Math.ceil(number2)); // -10
console.log(Math.ceil(number3)); // 11
console.log(Math.ceil(number4)); // 11

// random()
// The random() method returns a random number between 0 (inclusive) and 1 (exclusive).
console.log('===== Math.random() =====');
console.log(Math.random()); // 0.123456789012345

// There are many other methods in the Math object.
// You can check them out in the official documentation.

// Dates
// The built-in Date object in JavaScript is used to work with dates and times.
// TypeScript also supports the Date object.
// The Date object lets you work with dates and times in your applications.
console.log('===== Dates =====');

// Creating Date objects
// There are four ways to create a new Date object:
// 1. new Date()
console.log('===== new Date() =====');
const date1 = new Date(); // current date and time
console.log(date1); // 2021-09-06T14:31:59.000Z

// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(
	'===== new Date(year, month, day, hours, minutes, seconds, milliseconds) =====',
);
const date2 = new Date(2021, 8, 6, 14, 31, 59, 0);
console.log(date2); // 2021-09-06T14:31:59.000Z

const date3 = new Date(2025, 0, 14);
console.log(date3); // 2021-09-05T16:00:00.000Z

// 3. new Date(milliseconds)
console.log('===== new Date(milliseconds) =====');
const date4 = new Date(1738741679274);
console.log(date4); // 2021-09-06T14:31:59.000Z

// 4. new Date(dateString)
console.log('===== new Date(dateString) =====');
const date5 = new Date('2024-09-06T14:31:59');
console.log(date5); // 2021-09-06T14:31:59.000Z
const date6 = new Date('2023-08-22');
console.log(date6); // 2021-09-05T16:00:00.000Z

const date7 = new Date();
date7.setTime(Date.parse('Aug 9, 1995'));
console.log(date7); // 1995-08-09T04:00:00.000Z

{
	const today = new Date();
	const endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
	console.log('today', today);
	console.log('end year', endYear);
    endYear.setFullYear(today.getFullYear());
    console.log('end year after set full year', endYear);

    const msPerDay = 24 * 60 * 60 * 1000; // number of milliseconds per day
    let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
    console.log('days left before math round', daysLeft);
    daysLeft = Math.round(daysLeft);
    console.log(`Days left in the year: ${daysLeft}`);
}

{
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    console.log(`Current time: ${hours}:${minutes}:${seconds}`);

    const date = time.getDate();
    const month = time.getMonth() + 1; // month is zero-based
    const year = time.getFullYear();
    console.log(`Current date: ${month}/${date}/${year}`);
}
