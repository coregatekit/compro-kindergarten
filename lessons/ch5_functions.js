// Functions
// Functions are the fundamental building blocks of any application in JavaScript. They’re how you build up code to be reused, how you separate out logic, and how you keep your code DRY.
//
// In this chapter, we’ll cover the basics of functions, how to use them, and how to write them. We’ll also cover some advanced topics like closures and IIFEs.

// Defining Functions
// syntax: function name(parameters) { code }
function greet() {
  console.log("Hello World!");
}

// calling the function
greet();
// Hello World! will print on the console

// Functions scope
// Functions have their own scope. Variables declared inside a function are not accessible from outside the function.

function sayHi() {
  var message = "Hi!";
  console.log(message);
}

sayHi(); // Hi!
// console.log(message); // Error: message is not defined

// Other way to define a function
const hasDog = function() {
  console.log("I have a dog");
};
hasDog(); // I have a dog will print on the console

// Function with return value
// Functions can return values using the return keyword. The return keyword stops the execution of the function and returns a value from that function.
// syntax: function name() { return value }
function square() {
  return 5 * 5;
}

console.log(square()); // 25

function checkAge() {
  let age = 20;
  if (age >= 18) {
    return "You are an adult!";
  } else {
    return "You are a minor!";
  }
}

console.log(checkAge()); // You are an adult!

function isEvenNumber() {
  let num = 10;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEvenNumber()); // true

// Function with parameters
// You can pass values to a function using parameters. Parameters are like placeholders for values that you want to pass to the function.
// syntax: function name(parameter1, parameter2, ...) { code }
function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("John"); // Hello John!

function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15

// Function with multiple parameters
// You can pass multiple parameters to a function by separating them with commas.
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4)); // 24

// Default Parameters
// You can set default values for parameters in a function. If a parameter is not passed to the function, it will use the default value.
// syntax: function name(parameter1 = default1, parameter2 = default2, ...) { code }
// If a parameter is not passed to the function, it will use the default value.
function greetUserDefault(name = "Guest") {
  console.log("Hello " + name + "!");
}
greetUserDefault(); // Hello Guest!
greetUserDefault("John"); // Hello John!

function addDefault(a = 0, b = 0) {
  return a + b;
}
console.log(addDefault()); // 0
console.log(addDefault(5, 10)); // 15

// Function with rest Parameters
// You can pass a variable number of arguments to a function using the rest parameter syntax. The rest parameter is indicated by three dots (...) followed by the name of the parameter.
// syntax: function name(...rest) { code }
// The rest parameter allows you to pass a variable number of arguments to a function.
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Closures
//
// A closure is a function that has access to its own scope, the outer function’s scope, and the global scope. This means that a closure can access variables from its own scope, the outer function’s scope, and the global scope.
// Closures are created every time a function is created, at function creation time.

// The outer function defines a variable called "name"
const pet = function(name) {
  const getName = function() {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };

  return getName; // Return the inner function, thereby exposing it to outer scopes
};

const myPet = pet("Max");
console.log(myPet()); // Max

// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is executed immediately after it is created. It is a self-invoking function.
// syntax: (function() { code })();

(function() {
  console.log("Hello World!");
})();

// IIFE with Parameters
// You can pass parameters to an IIFE by wrapping the function in parentheses and passing the parameters inside the parentheses.
// syntax: (function(parameter1, parameter2) { code })(value1, value2);
(function(name) {
  console.log("Hello " + name + "!");
})("John");

// Arrow functions
// Arrow functions are a more concise way to write functions in JavaScript. They are often used in place of anonymous functions.
// syntax: const name = (parameters) => { code }

const greetArrow = () => {
  console.log("Hello World!");
};

greetArrow(); // Hello World!

const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(5, 10)); // 15

// If the function body consists of a single expression, you can omit the curly braces and the return keyword.
// syntax: const name = (parameters) => expression;
const squareArrow = (num) => num * num;
console.log(squareArrow(5)); // 25
const multiplyArrow = (a, b, c) => a * b * c;

// If the function has only one parameter, you can omit the parentheses around the parameter.
// syntax: const name = parameter => { code }
const double = (num) => num * 2;

// Recursive Functions
// A recursive function is a function that calls itself. Recursion is a powerful technique that allows you to solve complex problems by breaking them down into smaller, more manageable subproblems.
// syntax: function name() { code; name(); }
// A recursive function that calculates the factorial of a numbers
// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(8)); // 40320
