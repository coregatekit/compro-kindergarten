// Control Flow and Error Handling

// {
//     statement1;
//     statement2;
//     statement3;
//     ...
//     statementN;
// }
// e.g.
// {
//     console.log('Hello');
//     console.log('World');
// }

// Logical Operators
console.log('===== Logical Operators =====');
// Logical AND (&&)
console.log('===== Logical AND (&&) =====');
// syntax:
// expression1 && expression2 ... && expressionN
// expression1 and expression2 are expressions that return a boolean value
console.log('true && true = ', true && true); // true
console.log('true && false = ', true && false); // false
console.log('false && false = ', false && false); // false

// Logical OR (||)
console.log('===== Logical OR (||) =====');
// syntax:
// expression1 || expression2 .. || expressionN
// expression1 and expression2 are expressions that return a boolean value
console.log('true || true = ', true || true); // true
console.log('true || false = ', true || false); // true
console.log('false || false = ', false || false); // false

// Logical NOT (!)
console.log('===== Logical NOT (!) =====');
// syntax:
// !expression
// expression is an expression that returns a boolean value
console.log('!true = ', !true); // false
console.log('!false = ', !false); // true

// Comparison Operators
console.log('===== Comparison Operators =====');
// Equal (==)
console.log('===== Equal (==) =====');
// syntax:
// expression1 == expression2
// expression1 and expression2 are expressions that return a value
console.log('10 == 10 = ', 10 == 10); // true
console.log('10 == 20 = ', 10 == 20); // false

// Not Equal (!=)
console.log('===== Not Equal (!=) =====');
// syntax:
// expression1 != expression2
// expression1 and expression2 are expressions that return a value
console.log('10 != 10 = ', 10 != 10); // false
console.log('10 != 20 = ', 10 != 20); // true

// Greater Than (>)
console.log('===== Greater Than (>) =====');
// syntax:
// expression1 > expression2
// expression1 and expression2 are expressions that return a value
console.log('10 > 10 = ', 10 > 10); // false
console.log('10 > 20 = ', 10 > 20); // false
console.log('20 > 10 = ', 20 > 10); // true

// Greater Than or Equal (>=)
console.log('===== Greater Than or Equal (>=) =====');
// syntax:
// expression1 >= expression2
// expression1 and expression2 are expressions that return a value
console.log('10 >= 10 = ', 10 >= 10); // true
console.log('10 >= 20 = ', 10 >= 20); // false
console.log('20 >= 10 = ', 20 >= 10); // true

// Less Than (<)
console.log('===== Less Than (<) =====');
// syntax:
// expression1 < expression2
// expression1 and expression2 are expressions that return a value
console.log('10 < 10 = ', 10 < 10); // false
console.log('10 < 20 = ', 10 < 20); // true
console.log('20 < 10 = ', 20 < 10); // false

// Less Than or Equal (<=)
console.log('===== Less Than or Equal (<=) =====');
// syntax:
// expression1 <= expression2
// expression1 and expression2 are expressions that return a value
console.log('10 <= 10 = ', 10 <= 10); // true
console.log('10 <= 20 = ', 10 <= 20); // true
console.log('20 <= 10 = ', 20 <= 10); // false

// Strict Equal (===)
console.log('===== Strict Equal (===) =====');
// syntax:
// expression1 === expression2
// expression1 and expression2 are expressions that return a value
console.log('10 === 10 = ', 10 === 10); // true
console.log('10 === 20 = ', 10 === 20); // false
console.log('10 === "10" = ', 10 === '10'); // false

// Strict Not Equal (!==)
console.log('===== Strict Not Equal (!==) =====');
// syntax:
// expression1 !== expression2
// expression1 and expression2 are expressions that return a value
console.log('10 !== 10 = ', 10 !== 10); // false
console.log('10 !== 20 = ', 10 !== 20); // true
console.log('10 !== "10" = ', 10 !== '10'); // true

// Falsey and Truthy Values
console.log('===== Falsey and Truthy Values =====');
// Truthy values
// All values are truthy unless they are defined as falsey
// Examples of truthy values:
// true
// 1
// ' '
// '0'
// 'false'
// []
// {}
console.log('===== Truthy values =====');
console.log('true = ', true);
console.log('1 = ', 1);
console.log('" " = ', ' ');
console.log('"0" = ', '0');
console.log('"false" = ', 'false');
console.log('[] = ', []);

// Falsey values
// false
// 0
// ''
// null
// undefined
// NaN
console.log('===== Falsey values =====');
console.log('false = ', false);
console.log('0 = ', 0);
console.log('"" = ', '');
console.log('null = ', null);
console.log('undefined = ', undefined);
console.log('NaN = ', NaN);

// Conditional Statements
console.log('===== Conditional Statements =====');

// if statements
console.log('===== if statements =====');
// syntax:
// if (condition) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// }

const x: number = 10;
if (x === 10) {
	console.log('x is 10');
}

const xx: number = 20;
if (xx === 10) {
	console.log('x is 10');
}

// if else statements
console.log('===== if else statements =====');
// syntax:
// if (condition) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } else {
//     statement1;
//     statement2;
//     ...
//     statementN;
// }

const y: number = 20;
if (y === 10) {
	console.log('y is 10');
} else {
	console.log('y is not 10');
}

// if else if statements
console.log('===== if else if statements =====');
// syntax:
// if (condition1) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } else if (condition2) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } else {
//     statement1;
//     statement2;
//     ...
//     statementN;
// }

const z: number = 30;
if (z === 10) {
	console.log('z is 10');
} else if (z === 20) {
	console.log('z is 20');
} else {
	console.log('z is neither 10 nor 20');
}

// switch statements
console.log('===== switch statements =====');
// syntax:
// switch (expression) {
//     case value1:
//         statement1;
//         statement2;
//         ...
//         statementN;
//         break;
//     case value2:
//         statement1;
//         statement2;
//         ...
//         statementN;
//         break;
//     ...
//     case valueN:
//         statement1;
//         statement2;
//         ...
//         statementN;
//         break;
//     default:
//         statement1;
//         statement2;
//         ...
//         statementN;
// }

const fruitType = 'Apple';
switch (fruitType) {
	case 'Banana':
		console.log('Banana is yellow');
		break;
	case 'Apple':
		console.log('Apple is red');
		break;
	case 'Orange':
		console.log('Orange is orange');
		break;
	default:
		console.log('Unknown fruit');
}

console.log('===== switch statements with enum =====');
enum Fruit {
	Banana = 'Banana',
	Apple = 'Apple',
	Orange = 'Orange',
}
const fruit: Fruit = Fruit.Apple;
console.log('selected fruit: ', fruit);
switch (fruit) {
	case Fruit.Banana:
		console.log('Banana is yellow');
		break;
	case Fruit.Apple:
		console.log('Apple is red');
		break;
	case Fruit.Orange:
		console.log('Orange is orange');
		break;
	default:
		console.log('Unknown fruit');
}

// Error handling
console.log('===== Error handling =====');
// try catch statements
console.log('===== try catch statements =====');
// syntax:
// try {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } catch (error) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// }

const ans: number = 30;
try {
	if (ans !== 20) {
		throw 'Answer is not 20';
	}
    console.log('Answer is 20');
} catch (error) {
    console.log('Error: ', error);
    console.log('Typeof Error: ', typeof error);
}

// finally block
console.log('===== finally block =====');
// syntax:
// try {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } catch (error) {
//     statement1;
//     statement2;
//     ...
//     statementN;
// } finally {
//     statement1;
//     statement2;
//     ...
//     statementN;
// }

const anss: number = 20;
try {
    if (anss !== 20) {
        throw 'Answer is not 20';
    }
    console.log('Answer is 20');
} catch (error) {
    console.log('Error: ', error);
    console.log('Typeof Error: ', typeof error);
} finally {
    console.log('The program has ended');
}

// // throw with error
console.log('===== throw with error =====');
// syntax:
// throw error;
// error is a string or an object
try {
    if (ans !== 20) {
        throw new Error('Answer is not 20');
    }
} catch (error) {
    console.log('Error: ', error);
    console.log('Typeof Error: ', typeof error);
}

// In the real world, you can use the Error object to provide more information about the error
// e.g.
// throw new Error('Error message here');
// throw new Error('Error message here', 'filename.js', 10);
// throw new HttpException(404, 'Not Found');
// etc.
