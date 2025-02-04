// Print to console
console.log("Hello World!");

// JavaScript is case-sensitive and uses the Unicode character set.
// hello and HELLO are two different variables
const hello = "Hello";
const HELLO = "HELLO";
//Comments

// Single line Comment

/*
 * Multi-line Comment
 * Multi-line Comment
 * Multi-line Comment
 */

// const x = 10;
// If we comment the compiler will not consider the code

// Variable declaration
var x = 10; // var is a global scope variable
let y = 20; // let is a block scope variable
const z = 30; // const is a block scope variable and it is immutable

// Scope of variables
// Global Scope
var a = 10; // We can access this variable anywhere in the program
{
  let b = 20; // We can access this variable only within the block
  const c = 30; // We can access this variable only within the block and it is immutable

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// Declaration and initialization of variables
let name; // declaration
name = "John"; // initialization
console.log(name); // John will print on the console
let age;
console.log(age); // undefined will print on the console

// const variable should be initialized at the time of declaration
// const x; // SyntaxError: Missing initializer in const declaration

// Constants
const PI = 3.14; // We can't reassign the value to the constant variable
// const only prevents reassignment of the variable, not the value of the variable
const MY_OBJECT = { key: "value" };
console.log(MY_OBJECT.key); // value
MY_OBJECT.key = "anotherValue";
console.log(MY_OBJECT.key); // anotherValue

// Data Types
// Primitive Data Types
// 1. Number -> an integer or floating point number (e.g. 10, 10.5)
console.log(10);
console.log(10.5);
// 2. String -> a sequence of characters (e.g. "Hello")
console.log("Hello");
console.log("A string can be enclosed in single quotes or double quotes");
// 3. Boolean -> true and false
console.log(true);
console.log(false);
// 4. Undefined -> a variable that has not been assigned a value
console.log(undefined);
// 5. Null -> a variable with no value
console.log(null);
// and more...
// Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// and more...
// Non-Primitive we will discuss in the upcoming sections

// Numbers and the '+' operator
const txt = "The answer is " + 42; // "The answer is 42"
console.log(txt);
const txt2 = 42 + " is the answer"; // "42 is the answer"
console.log(txt2);
const txt3 = "37" + 5; // "375"
console.log(txt3);

// with other operators
console.log("37" - 5); // 32
console.log("37" * 5); // 185

// Converting strings to Numbers
const strNumber = "10";
const convertNumber = parseInt(strNumber);
console.log(convertNumber); // 10 with type number
console.log(typeof convertNumber); // number
const strNumber2 = "14.255";
const convertNumber2 = parseFloat(strNumber2);
console.log(convertNumber2); // 14.255 with type number
console.log(typeof convertNumber2); // number

// Arrays
// Declaration and initialization of an Array

const fruits = ["Apple", "Banana", "Orange"]; // Array of strings
console.log(fruits);
const numbers = [1, 2, 3, 4, 5]; // Array of Numbers
console.log(numbers);
const mixedArray = ["Apple", 1, "Banana", 2]; // Array of mixed data types
console.log(mixedArray);

// Accessing Array Elements
// Array index starts from 0
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange
console.log(fruits[3]); // undefined

console.log(mixedArray[0]); // Apple
console.log(mixedArray[1]); // 1
console.log(mixedArray[2]); // Banana
console.log(mixedArray[3]); // 2
console.log(mixedArray[4]); // undefined

// Array Length
// The length property returns the number of elements in an Arrays
console.log(fruits.length); // 3
console.log(numbers.length); // 5
console.log(mixedArray.length); // 4

// Adding Array elements
// push() method adds a new element to an array (at the end)
fruits.push("Mango");
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Removing Array Elements
// pop() method removes the last element from an Arrays
fruits.pop();
console.log(fruits); // ["Pineapple", "Apple", "Grapes", "Banana", "Orange"]
numbers.pop();
console.log(numbers); // [111, 1, 222, 2, 3, 4, 5]
const fruitRemoved = fruits.pop();
console.log(fruitRemoved); // Orange
console.log(fruits); // ["Pineapple", "Apple", "Grapes", "Banana"]

