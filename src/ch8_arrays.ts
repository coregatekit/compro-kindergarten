// Arrays in TypeScript
// Array declaration
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];
const arr3: Array<string> = ['a', 'b', 'c', 'd', 'e'];
const arr4: Array<boolean> = [true, false, true, false];

// Accessing array elements
console.log(arr1[0]); // Output: 1
console.log(arr1[2]); // Output: 3
console.log(arr1[4]); // Output: 5
console.log(arr1[5]); // Output: undefined

// Array methods
// push() method
const fruits: string[] = ['Apple', 'Orange', 'Banana'];
fruits.push('Mango');
console.log(fruits); // Output: ['Apple', 'Orange', 'Banana', 'Mango']

// pop() method
fruits.pop();
console.log(fruits); // Output: ['Apple', 'Orange', 'Banana']

const popFruit: string | undefined = fruits.pop();
console.log(popFruit); // Output: Banana

// concat() method
const textArr1: string[] = ['Hello', 'World'];
const textArr2: string[] = ['Good', 'Morning'];

const concatArr: string[] = textArr1.concat(textArr2);
console.log(concatArr); // Output: ['Hello', 'World', 'Good', 'Morning']

// slice() method
const arr: number[] = [1, 2, 3, 4, 5];
const slicedArr: number[] = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]

// join() method
const words: string[] = ['Hello', 'World', 'Good', 'Morning'];
const strWords: string = words.join(' ');
console.log(strWords); // Output: Hello World Good Morning

// reverse() method
const numArr: number[] = [1, 2, 3, 4, 5];
numArr.reverse();
console.log(numArr); // Output: [5, 4, 3, 2, 1]

// sort() method
const countries: string[] = ['India', 'USA', 'Japan', 'Thailand', 'Australia'];
countries.sort();
console.log(countries); // Output: ['Australia', 'India', 'Japan', 'Thailand', 'USA']

// indexOf() method
const secondCountries: string[] = [
	'India',
	'USA',
	'Japan',
	'Thailand',
	'Australia',
];
const index: number = secondCountries.indexOf('Japan');
console.log(index); // Output: 2

// lastIndexOf() method
const lastIndexOf: number = secondCountries.lastIndexOf('USA');
console.log(lastIndexOf); // Output: 1

// forEach() method
const aespaMembers: string[] = ['Karina', 'Giselle', 'Winter', 'Ningning'];
aespaMembers.forEach((num: number) => {
	console.log(num);
});

// for...in loop
for (const index in aespaMembers) {
	console.log(aespaMembers[index]);
}

// for...of loop
for (const member of aespaMembers) {
	console.log(member);
}

const numbers: number[] = [1, 2, 3, 4, 5];

// map() method
const doubleNumbers: number[] = numbers.map((num: number) => {
	return num * 2;
});
console.log('double arrays', doubleNumbers); // Output: [2, 4, 6, 8, 10]

// filter() method
const evenNumbers: number[] = numbers.filter((num: number) => {
	return num % 2 === 0;
});
console.log('filtered arrays', evenNumbers); // Output: [2, 4]

// reduce() method
const sum: number = numbers.reduce((acc: number, num: number) => {
	return acc + num;
}, 0);
console.log('numbers', numbers); // Output: [1, 2, 3, 4, 5]
console.log('sum of arrays numbers', sum); // Output: 15

// and more...

// Copy array
const baseArray: number[] = [1, 2, 3, 4, 5];
const copyArr: number[] = [...baseArray];
console.log('copy array', copyArr); // Output: [1, 2, 3, 4, 5]

const copyArr2: number[] = Array.from(baseArray);
console.log('copy array2', copyArr2); // Output: [1, 2, 3, 4, 5]

// Array destructuring
const [first, second, ...rest]: number[] = baseArray;
console.log('first', first); // Output: 1
console.log('second', second); // Output: 2
console.log('rest', rest); // Output: [3, 4, 5]

// Array spread
const arr5: number[] = [1, 2, 3];
const arr6: number[] = [4, 5, 6];
const arr7: number[] = [...arr5, ...arr6];
console.log('arr7', arr7); // Output: [1, 2, 3, 4, 5, 6]

// Array fill
const arr8: number[] = [1, 2, 3, 4, 5];
console.log('before fill', arr8); // Output: [1, 2, 3, 4, 5]
arr8.fill(0);
console.log('after fill ', arr8); // Output: [0, 0, 0, 0, 0]

// Array includes
const arr9: number[] = [1, 2, 3, 4, 5];
console.log('includes 3', arr9.includes(3)); // Output: true
console.log('includes 6', arr9.includes(6)); // Output: false

// How to empty an array
let arr10: number[] = [1, 2, 3, 4, 5];
console.log('before empty array', arr10); // Output: []
arr10 = [];
console.log('after empty array', arr10); // Output: []

// Array length
const arr11: number[] = [1, 2, 3, 4, 5];
console.log('array length', arr11.length); // Output: 5

// Array of Arrays
const arr12: number[][] = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log('array of arrays', arr12); // Output: [[1, 2], [3, 4], [5, 6]]

// How to loop through all elements in a multi-dimensional array
for (const arr of arr12) {
	for (const num of arr) {
		console.log(num);
	}
}

// More easy way to loop through an Array of Arrays
for (let i = 0; i < arr12.length; i++) {
	const array = arr12[i];
	for (let j = 0; j < array.length; j++) {
		const element = array[j];
		console.log(element);
	}
}

// Other way to loop through an Array of Arrays
const arr13: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
for (let i = 0; i < arr13.length; i++) {
    const currentLine = arr13[i];
    const newArr = [];
    for (const c of currentLine) {
        newArr.push(c);
    }
    console.log(newArr);
}