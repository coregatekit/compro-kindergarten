// Arrays in JavaScript
// An Array is a special variable that can hold more than one value at a time.
// An Array is a list-like object that can contain multiple values, where each value has an index.
// An Array can contain multiple data types.

const animals = ["Dog", "Cat", "Elephant", "Lion"];

// There are many methods available for Arrays in JavaScript.

// Legth of an Array
const lengthOfAnimals = animals.length;
console.log(lengthOfAnimals); // 4

// Find the index of an Array element
const indexOfCat = animals.indexOf("Cat");
console.log(indexOfCat); // 1
console.log(animals[indexOfCat]); // Cat
const indexOfTiger = animals.indexOf("Tiger");
console.log(indexOfTiger); // -1

// concat() method joins two or more Arrays
const fruits = ["Pineapple", "Apple", "Grapes", "Banana"];
const vegetables = ["Carrot", "Potato"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables); // ["Pineapple", "Apple", "Grapes", "Banana", "Orange", "Mango", "Carrot", "Potato"]

// join() method joins all elements of an Array into a string
const texts = ["Hello", "World", "Good", "Morning"];
const text = texts.join(", ");
console.log(text); // Hello, World

// Copy an Array
const cryptocurrencies = ["BTC", "ETH", "XRP", "SOL", "BNB"];
console.log(cryptocurrencies);
// copy by slice() method
const copyCryptocurrencies = cryptocurrencies.slice();
console.log(copyCryptocurrencies);
// copy by spread operator
const copy2Cryptocurrencies = [...cryptocurrencies];
console.log(copy2Cryptocurrencies);
// using from() method
const copy3Cryptocurrencies = Array.from(cryptocurrencies);
console.log(copy3Cryptocurrencies);

// etc...

// How to access Array elements
// Array index starts from 0

const arrayOfColors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];
console.log(arrayOfColors[0]); // Red
console.log(arrayOfColors[1]); // Green

// Use loop to access all elements of an Array
for (let i = 0; i < arrayOfColors.length; i++) {
  console.log(arrayOfColors[i]);
}

// Use forEach() method to access all elements of an Array
arrayOfColors.forEach((color) => {
  console.log(color);
});

// forEach() method can take three arguments: element, index, and array
arrayOfColors.forEach((element, index, array) => {
  console.log(element, index, array);
});

// map() method creates a new Array by calling a function on each element of an Array
const arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]
const arrayOfSquares = arrayOfNumbers.map((number) => number * number); // It will create a new Array with the square of each element
console.log(arrayOfSquares); // [1, 4, 9, 16, 25]

// How to add elements to an Array
// push() method adds a new element to an array (at the end)
arrayOfColors.push("Pink");
console.log(arrayOfColors); // ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink']

// unshift() method adds a new element to an array (at the beginning)
arrayOfColors.unshift("Black");
console.log(arrayOfColors); // ['Black', 'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink']

// How to remove elements from an Array
// pop() method removes the last element from an Array
arrayOfColors.pop();
console.log(arrayOfColors); // ['Black', 'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple']

// shift() method removes the first element from an Array
arrayOfColors.shift();
console.log(arrayOfColors); // ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple']

// splice() method removes elements from an Array
arrayOfColors.splice(1, 2);
console.log(arrayOfColors); // ['Red', 'Yellow', 'Orange', 'Purple']

// How to sort an Array
// sort() method sorts an Array
arrayOfColors.sort();
console.log(arrayOfColors); // ['Orange', 'Purple', 'Red', 'Yellow']

// How to reverse an Array
// reverse() method reverses an Array
arrayOfColors.reverse();
console.log(arrayOfColors); // ['Yellow', 'Red', 'Purple', 'Orange']

// How to find the index of an element in an Array
console.log(arrayOfColors); // 1
const indexOfRed = arrayOfColors.indexOf("Red");
console.log(`Index of Red is ${indexOfRed}`); // 1

// How to check if an element exists in an Array
const isRedExists = arrayOfColors.includes("Red");
console.log(`Is Red exists in the Array? ${isRedExists}`); // true

// How to convert an Array to a string
const stringOfColors = arrayOfColors.toString();
console.log(stringOfColors); // Yellow,Red,Purple,Orange

// How to convert an Array to a string with a separator
const stringOfColors2 = arrayOfColors.join(" - ");
console.log(stringOfColors2); // Yellow - Red - Purple - Orange

// How to copy an Array
// copy by slice() method
const copyOfColors = arrayOfColors.slice();
console.log(copyOfColors); // ['Yellow', 'Red', 'Purple', 'Orange']
// copy by spread operator
const copy2OfColors = [...arrayOfColors];
console.log(copy2OfColors); // ['Yellow', 'Red', 'Purple', 'Orange']
// using from() method
const copy3OfColors = Array.from(arrayOfColors);
console.log(copy3OfColors); // ['Yellow', 'Red', 'Purple', 'Orange']

// How to empty an Array
// Method 1
arrayOfColors.length = 0;
console.log(arrayOfColors); // []

// Method 2
arrayOfColors.splice(0, arrayOfColors.length);
console.log(arrayOfColors); // []

// Method 3
while (arrayOfColors.length) {
  arrayOfColors.pop();
}

// How to check if an Array is empty
const isEmpty = arrayOfColors.length === 0;

// Array of Arrays
const arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrayOfArrays);

// Accessing elements of an Array of Arrays
console.log(arrayOfArrays[0][0]); // 1
console.log(arrayOfArrays[1][1]); // 5
console.log(arrayOfArrays[2][2]); // 9

// How to loop through an Array of Arrays
for (let i = 0; i < arrayOfArrays.length; i++) {
  for (let j = 0; j < arrayOfArrays[i].length; j++) {
    console.log(arrayOfArrays[i][j]);
  }
}

// More easy way to loop through an Array of Arrays
for (let i = 0; i < arrayOfArrays.length; i++) {
  const array = arrayOfArrays[i];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    console.log(element);
  }
}

// Use forEach() method to loop through an Array of Arrays
arrayOfArrays.forEach((array) => {
  array.forEach((element) => {
    console.log(element);
  });
});

// For easy rendering 
for (let i = 0; i < arrayOfArrays.length; i++) {
  const array = arrayOfArrays[i];
  const line = [];
  array.forEach((element) => {
    line.push(element);
  });
  console.log(line);
}
