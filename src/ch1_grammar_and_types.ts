// Grammar and Types in TypeScript

// Print on console
console.log('Hello World!');

// Comments
// Cooment in TypeScript is same as in JavaScript
// The compiler ignores the comments
// There are two types of comments in TypeScript

// Single line comment

// console.log('ABC');
// console.log('DEF');

/*
    Multi-line comment
*/
/*
    const name = "John";
    const age = 25;
*/

// Variables
// Variables are used to store data values
// In TypeScript, we use the var, let, const keyword to declare variables
// Variables are case-sensitive
// TypeScript is a statically typed language

// var name = 'John';
// let age = 25;
// const email = 'test@mail.com';

var name: string = 'John';
console.log(name);
name = 'Doe'; // Reassigning the value
console.log(name);

let age: number = 25;
console.log(age);
age = 30; // Reassigning the value
console.log(age);

// const is used to declare a constant cannot be reassigned
const email: string = 'johndoe@example.com';
console.log(email);
// email = 'doe@example.com'; // Error: Cannot reassign the value of a constant

// How let and var are different
// var is function scoped
// let is block scoped
{
	let x = 10;
	console.log('X in scope: ', x); // 10
}
// console.log('X out of scope: ', x); // Error: Cannot find name 'x' because x is out of block scoped

// var is function scoped
{
	var y = 20;
	console.log('Y in scope: ', y); // 20
}
console.log('Y out of scope: ', y); // 20

// Data Types
// TypeScript is a statically typed language
// TypeScript supports the following data types

// 1. Number
// Number represents numeric values
const num1 = 10;
console.log('Number: ', num1);
console.log('Typeof num1 is:', typeof num1);
const num2 = 10.5;
console.log('Number: ', num2);
console.log('Typeof num2 is:', typeof num2);
const num3 = 24.2592552;
console.log('Number: ', num3.toFixed(4));
console.log('Typeof num2 is:', typeof num3);

// 2. String
// String represents a sequence of characters
const str = 'Hello World!';
console.log('String: ', str);
console.log('Typeof str is:', typeof str);

let newStr = 'Hello';
console.log('String: ', newStr);
newStr = 'World';
console.log('String: ', newStr);
newStr = 10; // Type '10' is not assignable to type 'string', but it will compile and still work because of JavaScript's dynamic typing.
console.log('String: ', newStr);

// Number with operator (+)
// Numbers and the '+' operator
const txt = 'The answer is ' + 42; // "The answer is 42"
console.log(txt);
const txt2 = 42 + ' is the answer'; // "42 is the answer"
console.log(txt2);
const txt3 = '37' + 5; // "375"
console.log(txt3);
console.log('Typeof txt3 is:', typeof txt3);

// with other operators
const txt4 = '37' - 5; // 32
console.log('Txt4 is', txt4); // 32
console.log('Typeof txt4 is:', typeof txt4); // number
console.log('37' * 5); // 185

// 3. Boolean
// Boolean represents a logical entity and can have two values: true and false
const isTrue = true;
console.log('Boolean: ', isTrue);
console.log('Typeof isTrue is:', typeof isTrue);
// isTrue = false; // Cannot reassign the value of a constant
const isFalse = false;
console.log('Boolean: ', isFalse);
console.log('Typeof isFalse is:', typeof isFalse);

// 4. Array
// Array is a special type of data type which can store multiple values
// An array is an ordered collection of values
const fruits = ['Apple', 'Banana', 'Orange'];
console.log('Array: ', fruits);
const numbers = [1, 2, 3, 4, 5];
console.log('Array: ', numbers);
const mixed = [1, 'Apple', true];
console.log('Array: ', mixed);
const arr: Array<number> = [1, 2, 3, 4, 5]; // declaring an array of numbers
console.log('Array: ', arr);
const arr2: Array<string> = ['Apple', 'Banana', 'Orange']; // declaring an array of strings
console.log('Array: ', arr2);

// accessing array elements
// we can access the array elements by using the index
// the index of the first element is 0
console.log('Fruits: ', fruits[0]);
console.log('Fruits: ', fruits[1]);
console.log('Numbers: ', numbers[0]);
console.log('Numbers: ', numbers[1]);

// length of an array
console.log('Length of fruits array: ', fruits.length);
console.log('Length of numbers array: ', numbers.length);

// access the last element of an array
console.log('Last element of fruits array: ', fruits[fruits.length - 1]);

// access the elements out of the index range
console.log('Fruits: ', fruits[10]); // undefined

// 5. Tuple
// Tuple is a new data type which includes set of values of different data types
// Tuple values are individually called items
// Tuple values are ordered
// Tuple values are indexed
// Tuple values are immutable
let person: [string, number];
person = ['John Doe', 25];
console.log('Tuple: ', person);
console.log('Name: ', person[0]);
console.log('Age: ', person[1]);

const employee: [string, number, boolean] = ['John Doe', 25, true];
console.log('Tuple: ', employee);
// destructuring tuple
const [empName, empAge, empStatus] = employee;
console.log('Name: ', empName);
console.log('Age: ', empAge);
console.log('Status: ', empStatus);

// 6. Enum
// Enum is a new data type which is included in TypeScript
// Enum is a way of giving more friendly names to sets of numeric values
// Enum values are indexed
// Enum values are immutable
enum Color {
    Red,
    Green,
    Blue,
}

const currentColor: Color = Color.Green;
console.log('Enum: ', currentColor);

// Enum with string values
enum Status {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
}

const currentStatus: Status = Status.Active;
console.log('Enum: ', currentStatus);

// 7. Any
// Any is a data type which is used to represent the values that might change over time
// Any is a dynamic data type
let value: any = 10;
console.log('Any: ', value);
value = 'Hello World!';
console.log('Any: ', value);
value = true;
console.log('Any: ', value);
