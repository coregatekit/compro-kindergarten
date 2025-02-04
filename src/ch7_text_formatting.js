// String
// String is a primitive data type in JavaScript. It is used to represent text data.
// String is a sequence of characters enclosed in single or double quotes.

const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
console.log(string1); // A string primitive
console.log(string2); // Also a string primitive
console.log(string3); // Yet another string primitive
console.log(string4); // [String: 'A String object']

console.log("Cat");
console.log("Cat".charAt(1));
console.log("Cat"[1]);

// Concatenation
const string5 = "Hello";
const string6 = "World";
console.log(string5 + " " + string6); // Hello World
console.log(string5.concat(" ", string6)); // Hello World
console.log(`${string5} ${string6}`); // Hello World

// Comparing strings
const a = "a";
const b = "b";
if (a < b) {
  console.log(a + " is less than " + b);
} else if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(`${a} is equal to ${b}`);
}

const codeA = a.charCodeAt(0);
console.log(codeA); // a
const codeB = b.charCodeAt(0);
console.log(codeB); // b

const text = "Hello World";
console.log(text.indexOf("World")); // 6
console.log(text.lastIndexOf("o")); // 7
console.log(text.includes("Hello")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true
console.log(text.substring(6, 11)); // World
console.log(text.toLocaleLowerCase()); // hello world
console.log(text.toLocaleUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world
console.log(text.toUpperCase()); // HELLO WORLD
const text2 = "   Hello World   ";
console.log("text 2 before trim ", text2); //    Hello World
console.log(`text 2 after trim ${text2.trim()}`); // Hello World
console.log(text.split(" ")); // [ 'Hello', 'World' ]
console.log(text.replace("World", "Universe")); // Hello Universe
console.log(`string repeat: ${text.repeat(2)}`); // Hello WorldHello World
