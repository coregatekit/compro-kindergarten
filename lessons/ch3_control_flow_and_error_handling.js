// {
//   statement1;
//   statement2;
//   ...
//   statementN;
// }
//

// e.g.
// while (x < 10) {
//   x++;
// }

// Conditional statements
// syntax:
// if (condition) {
//   // code block
// }
// e.g.

let x = 10;
if (x === 10) {
  console.log("x is 10");
}

x = 20;
if (x === 10) {
  console.log("x is 10");
}

//
// if (condition) {
// } else {
//   // code block
// }
let y = 10;
if (y === 10) {
  console.log("y is 10");
} else {
  console.log("y is not 10");
}

//
// if (condition) {
//   // code block
// } else if (condition) {
//   // code block
// } else if (condition) {
//   // code block
// }
// // ...
// else {
//   // code block
// }
let z = 10;
if (z === 30) {
  console.log("z is 30");
} else if (z === 20) {
  console.log("z is 20");
} else if (z === 10) {
  console.log("z is 10");
} else {
  console.log("z is not 30, 20, or 10");
}

// comparators
// == -> equality
// === -> strict equality

let num1 = 10;
console.log("num1 == 10: ", num1 == 10); // true
console.log("num1 === 10: ", num1 === 10); // true
console.log("num1 == '10': ", num1 == "10"); // true
console.log("num1 === '10': ", num1 === "10"); // false

// Falsy values
// e.g.
// false
// undefined
// null
// 0
// NaN
// "" (empty string)

// Switch statement
// syntax:
// switch (expression) {
//  case value1:
//  // code block
//  break;
//  case value2:
//  // code block
//  break;
//  ...
//  default:
//  // code block
//  break;
// }

let fruitType = "Apple";
switch (fruitType) {
  case "Banana":
    console.log("Banana is yellow in color");
    break;
  case "Apple":
    console.log("Apple is red in color");
    break;
  case "Orange":
    console.log("Orange is orange in color");
    break;
  default:
    console.log("I don't know the color of the fruit");
}

// Error Handling

// Throw statement
// We can throw an exception using the throw statement
// syntax:
// throw expression;
// e.g.
// throw "Error2";
// throw 42;
// throw true;
// throw { message: "Error message" };

// try...catch statement
// syntax:
// try {
//  // code block
// } catch (error) {
//  // code block
// }

let ans = 30;
try {
  if (ans === 20) {
    throw "x is the wrong answer";
  }
  console.log("The value of x is: ", ans);
} catch (error) {
  console.log("The type of error is: ", typeof error);
  console.log("An error occurred: ", error);
}

// try...catch...finally statement
// syntax:
// try {
// // code block
// } catch (error) {
// // code block
// } finally {
// // code block
// }
// e.g.

try {
  console.log("Hello");
  throw "bugssss";
} catch (error) {
  console.log("An error occurred: ", error);
  console.log("The type of error is: ", typeof error);
} finally {
  console.log("clean up the resources");
}

// Throw error object
// We can throw an error object using the throw statement1

try {
  throw new Error("Cannot do this");
} catch (error) {
  console.log("An error occurred: ", error);
  console.log("The type of error is: ", typeof error);
}
