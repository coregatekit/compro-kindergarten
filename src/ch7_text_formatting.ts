// Strings

// Define a string
const str = 'Hello, World!';
console.log(str); // Hello, World!
console.log('typeof str is', typeof str); // string

// String properties
// The String object has a number of useful properties.
// The length property returns the length of a string.
console.log('===== String properties =====');
console.log(str.length); // 13

// String methods
// The String object has a number of useful methods.
// The charAt() method returns the character at a specified index (position) in a string.
// The charCodeAt() method returns the Unicode of the character at a specified index in a string.
// The concat() method joins two or more strings.
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// The replace() method replaces a specified value with another value in a string.
// The split() method splits a string into an array of substrings.
// The substring() method extracts parts of a string, beginning at the start index and through the end index of a string.
// The toLowerCase() method converts a string to lowercase letters.
// The toUpperCase() method converts a string to uppercase letters.
// The trim() method removes whitespace from both ends of a string.
// The repeat() method returns a new string with a specified number of copies of the original string.
// The startsWith() method returns true if a string starts with a specified value, otherwise false.
// The endsWith() method returns true if a string ends with a specified value, otherwise false.
// The includes() method returns true if a string contains a specified value, otherwise false.

console.log('===== String methods =====');
// charAt()
// The charAt() method returns the character at a specified index (position) in a string.
const text1 = 'Hello, World!';
console.log('===== charAt() =====');
console.log(text1.charAt(0)); // H
console.log(text1.charAt(1)); // e
console.log(text1.charAt(2)); // l
console.log(text1.charAt(3)); // l

// charCodeAt()
// The charCodeAt() method returns the Unicode of the character at a specified index in a string.
console.log('===== charCodeAt() =====');
console.log(text1.charCodeAt(0)); // 72
console.log(text1.charCodeAt(1)); // 101
console.log(text1.charCodeAt(2)); // 108
console.log(text1.charCodeAt(3)); // 108

// concat()
// The concat() method joins two or more strings.
console.log('===== concat() =====');
const text2 = 'JavaScript';
const text3 = 'TypeScript';
console.log(text2.concat(' ', text3)); // JavaScript TypeScript

// indexOf()
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
const text5 = 'Hello, World!';
console.log('===== indexOf() =====');
console.log(text5.indexOf('H')); // 0
console.log(text5.indexOf('e')); // 1
console.log(text5.indexOf('l')); // 2
console.log(text5.indexOf('o')); // 4

// lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log('===== lastIndexOf() =====');
console.log(text5.lastIndexOf('H')); // 0
console.log(text5.lastIndexOf('e')); // 1
console.log(text5.lastIndexOf('l')); // 9
console.log(text5.lastIndexOf('o')); // 7


// replace()
// The replace() method replaces a specified value with another value in a string.
console.log('===== replace() =====');
const text6 = 'Hello, World!';
console.log(text6.replace('Hello', 'Hi')); // Hi, World!

// split()
// The split() method splits a string into an array of substrings.
console.log('===== split() =====');
const text7 = 'Hello, World!';
console.log(text7.split(' ')); // [ 'Hello,', 'World!' ]

// substring()
// The substring() method extracts parts of a string, beginning at the start index and through the end index of a string.
console.log('===== substring() =====');
const text8 = 'Hello, World!';
console.log(text8.substring(0, 5)); // Hello
console.log(text8.substring(7, 12)); // World

// toLowerCase()
// The toLowerCase() method converts a string to lowercase letters.
console.log('===== toLowerCase() =====');
const text9 = 'Hello, World!';
console.log(text9.toLowerCase()); // hello, world!

// toUpperCase()
// The toUpperCase() method converts a string to uppercase letters.
console.log('===== toUpperCase() =====');
const text10 = 'Hello, World!';
console.log(text10.toUpperCase()); // HELLO, WORLD!

// trim()
// The trim() method removes whitespace from both ends of a string.
console.log('===== trim() =====');
const text11 = '   Hello, World!   ';
console.log(text11.trim()); // Hello, World!

// repeat()
// The repeat() method returns a new string with a specified number of copies of the original string.
console.log('===== String repeat =====');
const text12 = 'Hello, World!';
console.log(text12.repeat(3)); // Hello, World!Hello, World!Hello, World!

// startsWith()
// The startsWith() method returns true if a string starts with a specified value, otherwise false.
console.log('===== startsWith() =====');
const text13 = 'Hello, World!';
console.log(text13.startsWith('Hello')); // true
console.log(text13.startsWith('World')); // false

// endsWith()
// The endsWith() method returns true if a string ends with a specified value, otherwise false.
console.log('===== endsWith() =====');
const text14 = 'Hello, World!';
console.log(text14.endsWith('World!')); // true
console.log(text14.endsWith('Hello')); // false

// includes()
// The includes() method returns true if a string contains a specified value, otherwise false.
console.log('===== includes() =====');
const text15 = 'Hello, World!';
console.log(text15.includes('Hello')); // true
console.log(text15.includes('World')); // true
console.log(text15.includes('JavaScript')); // false

// The comparison is case-sensitive.
console.log('===== String comparison =====');
console.log('Hello' === 'hello'); // false
console.log('Hello' === 'Hello'); // true

// String interpolation
// String interpolation is a way to embed expressions in a string.
// You can use string interpolation with template literals.
// Template literals are enclosed by backticks (` `).
// You can embed expressions in a string by using ${expression}.
console.log('===== String interpolation =====');
const name = 'Alice';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is Alice and I am 30 years old.
