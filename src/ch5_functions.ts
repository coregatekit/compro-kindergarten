// Functions
// Functions are the fundamental building blocks of any application in JavaScript.
// They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules.
// TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

// Functions in TypeScript
// In TypeScript, both the arguments and the return value can have their types explicitly set.
// This makes it clear what is going in and coming out of the function.
// TypeScript also adds some new features to help developers create more robust functions.

// Function Declaration
// syntax: function name(parameter1: type, parameter2: type, ...): return_type {
//     // code block
// }

function greet(): void {
	// void is the return type of the function that means the function does not return anything
	console.log('Hello, World!');
}

// calling the function
greet();

// Function Scope
// Functions in JavaScript have their own scope.
// TypeScript is no different.
// The scope of a variable is the region of your program in which it’s defined.
// TypeScript has three types of scopes:
// 1. Global Scope
// 2. Class Scope
// 3. Local Scope

// Global Scope
// A variable declared outside a function becomes a global variable.
// Global variables are accessible from any part of the program.

// Example:
const globalVar: number = 12; // global variable
function globalFunction(): void {
	console.log(`Variable in global scope ${globalVar}`); // accessing global variable
}
globalFunction();

// Class Scope
// Variables declared in a class are class members.
// They are accessible within the class and can be accessed using the this keyword.

// Example:
class MyClass {
	classVar = 10; // class variable
	classFunction(): void {
		console.log(`Variable in class scope ${this.classVar}`); // accessing class variable
	}
}

const myClass = new MyClass();
myClass.classFunction();

// Local Scope
// Variables declared inside a function are local variables.
// They are accessible only within the function.

// Example:
function localFunction(): void {
	const localVar = 20; // local variable
	console.log(`localVar = ${localVar}`); // accessing local variable
}
localFunction();
// console.log(localVar); // error: localVar is not defined

// Other Function Syntax
// Function Expression
// Functions can also be created using function expressions.
// A function expression can be stored in a variable.
// The variable can be used to call the function.

// Example:
// biome-ignore lint/complexity/useArrowFunction: <explanation>
const greetExpression = function (): void {
	console.log('Hello, World!');
};
greetExpression();

// Arrow Function
// Arrow functions are a more concise way of writing a function expression.
// Arrow functions do not have their own this.
// They are not well suited for defining object methods.

// Example:
const greetArrow = (): void => {
	console.log('Hello, World!');
};
greetArrow();

// Function Parameters
// Functions can take parameters.
// Parameters are variables that are passed to the function when it is called.
// Parameters are defined in the function declaration.
// The values of the parameters are passed when the function is called.

// Example:
function greetParam(name: string): void {
	console.log(`Hello, ${name}!`);
}
greetParam('Karina');

// Optional Parameters
// In TypeScript, you can make function parameters optional by adding a question mark (?) after the parameter name.
// Optional parameters must be declared after the required parameters.

// Example:
function greetOptional(name: string, message?: string): void {
	if (message) {
		console.log(`${message}, ${name}!`);
	} else {
		console.log(`Hello, ${name}!`);
	}
}
greetOptional('Winter');
greetOptional('Giselle', 'Good Morning');

// Default Parameters
// In TypeScript, you can set default values for function parameters.
// If a value is not passed for a parameter, the default value is used.

// Example:
function greetDefault(name: string, message: string = 'Hello'): void {
	console.log(`${message}, ${name}!`);
}
greetDefault('NingNing');

// Rest Parameters
// In TypeScript, you can use rest parameters to represent an indefinite number of arguments as an array.
// Rest parameters are indicated by three dots (...) before the parameter name.
// Rest parameters must be the last parameter in the function declaration.

// Example:
function greetRest(name: string, ...messages: string[]): void {
	// biome-ignore lint/complexity/noForEach: <explanation>
	messages.forEach((message) => {
		console.log(`${message}, ${name}!`);
	});
}
greetRest('Naevis', 'Good Morning', 'Good Afternoon', 'Good Evening');

// Function Overloading
// Function overloading is a feature that allows a function to have multiple signatures.
// TypeScript chooses the correct signature based on the number and types of arguments passed to the function.

// Example:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
	return a + b;
}
console.log(add(1, 2)); // 3
console.log(add('Hello', 'World')); // HelloWorld

// Function with return type
// In TypeScript, you can specify the return type of a function.
// The return type is the type of the value that the function returns.
// If the function does not return a value, you can specify the return type as void.

// Example:
function plus(a: number, b: number): number {
	return a + b;
}
const result = plus(10, 20);
console.log(`Result of plus function: ${result}`);

function sumTotalNumbers(numbers: number[]): number {
	// return numbers.reduce((total, num) => total + num, 0);
	let sum = 0;
	for (const num of numbers) {
		sum += num;
	}
	return sum;
}

const myNumbers = [1, 2, 3, 4, 5];
const total = sumTotalNumbers(myNumbers);
console.log(`Total of numbers: ${total}`);

function allowAge(age: number): boolean {
	return age >= 18;
}
const myAge = 20;
const isAllowed = allowAge(myAge);
console.log(`Is allowed: ${isAllowed}`);

// Function with multiple return types
// In TypeScript, you can specify multiple return types for a function using the | operator.
// The function can return any of the specified types.

// Example:
function getLength(value: string | number): number {
	if (typeof value === 'string') {
		return value.length;
	} else {
		return value.toString().length;
	}
}

const strLength = getLength('Hello, World!');
console.log(`Length of string: ${strLength}`);
const numLength = getLength(12345);
console.log(`Length of number: ${numLength}`);

// Function with callback
// In TypeScript, you can pass a function as a parameter to another function.
// This is known as a callback function.
// The callback function is called inside the main function.

// Example:
function greetCallback(
	name: string,
	callback: (message: string) => void,
): void {
	const message = `Hello, ${name}!`;
	callback(message);
}
function printMessage(message: string): void {
	console.log(message);
}

greetCallback('Wendy', printMessage);

// Function with promise
// In TypeScript, you can use promises to handle asynchronous operations.
// A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Example:
function fetchData(time: number): Promise<string> {
    console.log('Start executing fetchData function');
	return new Promise((resolve, reject) => {
		if (time < 3) {
			setTimeout(() => {
				resolve('Data fetched successfully!');
			}, 2000);
		} else {
			setTimeout(() => {
				reject('Error fetching data!');
			}, 2000);
		}
	});
}

fetchData(2)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});
console.log('Fetching data...');

// fetchData(4)
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// Function with async/await
// In TypeScript, you can use async/await to write asynchronous code that looks synchronous.
// The async keyword is used to define an asynchronous function.
// The await keyword is used to wait for a promise to be resolved.

// Example:
async function fetchDataAsync(time: number): Promise<string> {
    console.log('Start executing fetchDataAsync function');
    try {
        const data = await fetchData(time);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
fetchDataAsync(2)

// Function return with single expression
// In TypeScript, you can use a single expression to return a value from a function.
// The return keyword is optional in this case.

// Example:
const multiply = (a: number, b: number): number => a * b;
console.log(`Result of multiply function: ${multiply(5, 6)}`);

// Function with generic type
// In TypeScript, you can create functions with generic types.
// Generic types allow you to define functions that can work with a variety of data types.

// Example:
function identity<T>(arg: T): number {
    if (typeof arg === 'string') {
        console.log(`Argument is a string: ${arg}`);
        return arg.length;
    }
    if (typeof arg === 'number') {
        console.log(`Argument is a number: ${arg}`);
        return arg.toString().length;
    }
}

const strIdentity = identity<string>('Hello, World!');
console.log(`String identity: ${strIdentity}`);
const numberIdentity = identity<number>(12345);
console.log(`Number identity: ${numberIdentity}`);

// Recursive function
// In TypeScript, you can create recursive functions that call themselves.
// Recursive functions are useful for solving problems that can be broken down into smaller subproblems.

// Example:
function factorial(n: number): number {
    // if (n === 0) {
    //     return 1;
    // } else {
    //     return n * factorial(n - 1);
    // }
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 12: ${factorial(12)}`);
console.log(`Factorial of 21: ${factorial(21)}`);