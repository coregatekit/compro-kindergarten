// Number
// The built-in Number object in JavaScript allows you to work with numbers. It provides a lot of methods to work with numbers.
const biggestNumber = Number.MAX_VALUE;
console.log(biggestNumber); // 1.7976931348623157e+308
const smallestNumber = Number.MIN_VALUE;
console.log(smallestNumber); // 5e-324
const infiniteNumber = Number.POSITIVE_INFINITY;
console.log(infiniteNumber); // Infinity
const negativeInfiniteNumber = Number.NEGATIVE_INFINITY;
console.log(negativeInfiniteNumber); // -Infinity
const notANumber = Number.NaN;
console.log(notANumber); // NaN

// Parsing Numbers
// The parseInt() function parses a string and returns an integer.
const ten = "10";
const number1 = parseInt(ten);
console.log(number1); // 10
console.log(typeof number1); // 10

const pi = "3.14";
const number2 = parseFloat(pi);
console.log(number2); // 3.14
console.log(typeof number2); // number

// Number Methods
// The Number object has a lot of methods to work with numbers.
// toFixed()
// The toFixed() method formats a number using fixed-point notation.
const number3 = 10.12345;
console.log(number3.toFixed()); // 10
const number4 = 10.12345;
console.log(number4.toFixed(2)); // 10.12

// Math
// The Math object allows you to perform mathematical tasks.

// Math.PI
// The Math.PI property returns the value of PI (3.14159...).
console.log(Math.PI); // 3.141592653589793

// Math.round()
// The Math.round() method rounds a number to the nearest integer.
const number5 = 10.12345;
console.log(Math.round(number5)); // 10
const number6 = 10.6789;
console.log(Math.round(number6)); // 11
const number7 = 10.5;
console.log(Math.round(number7)); // 11

// Math.ceil()
// The Math.ceil() method rounds a number up to the nearest integer.
const number8 = 10.12345;
console.log(Math.ceil(number8)); // 11
const number9 = 10.6789;
console.log(Math.ceil(number9)); // 11
const number10 = 10.5;
console.log(Math.ceil(number10)); // 11

// Math.floor()
// The Math.floor() method rounds a number down to the nearest integer.
const number11 = 10.12345;
console.log(Math.floor(number11)); // 10
const number12 = 10.6789;
console.log(Math.floor(number12)); // 10
const number13 = 10.5;
console.log(Math.floor(number13)); // 10

// Math.random()
// The Math.random() method returns a random number between 0 and 1.
console.log(Math.random()); // 0.123456789

// Skip...

// Math.sin()
// The Math.sin() method returns the sine of a number.
console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI / 2)); // 1

// Math.cos()
// The Math.cos() method returns the cosine of a number.
console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI)); // -1

// Math.tan()
// The Math.tan() method returns the tangent of a number.
console.log(Math.tan(0)); // 0
console.log(Math.tan(Math.PI / 4)); // 1

// Math.abs()
// The Math.abs() method returns the absolute value of a number.
const number14 = -10;
console.log(Math.abs(number14)); // 10

// Math.pow()
// The Math.pow() method returns the base to the exponent power.
const number15 = 2;
const power = 3;
console.log(Math.pow(number15, power)); // 8

// Math.sqrt()
// The Math.sqrt() method returns the square root of a number.
const number16 = 16;
console.log(Math.sqrt(number16)); // 4

// Date
// The built-in Date object in JavaScript allows you to work with dates and times. It provides a lot of methods to work with dates and times.
// set method to set the date and time
// get method to get the date and time
// to method to convert the date and time to a string

// Creating a Date Object
const date1 = new Date(); // current date and time
console.log(date1); // show the current date and time

const date2 = new Date("2021-01-01"); // 2021-01-01T00:00:00.000Z
console.log(date2);

const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
console.log(ipoDate); // 1995-08-09T04:00:00.000Z

{
  const today = new Date();
  const endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
  console.log("today", today);
  console.log("end year", endYear);
  endYear.setFullYear(today.getFullYear());
  console.log("end year after set full year", endYear);
  const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
  daysLeft = Math.round(daysLeft);
  console.log("days left", daysLeft);
}

function JSClock() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);

  const date = time.getDate();
  const month = time.getMonth() + 1; // It starts from 0 to 11, January is 0 and December is 11
  const year = time.getFullYear();
  console.log(date + "/" + month + "/" + year);
}

JSClock(); // show the current time
