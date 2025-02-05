// Maps and Sets

// Maps
// Maps is a collection of key-value pairs.
// It is similar to objects in JavaScript but with some differences.
// In objects, the keys are always strings, but in maps, the keys can be of any type.
// The keys in maps are ordered, and the keys can be iterated in the order of their insertion.

// Creating a Map
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1); // Output: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// How to get the value of a key
console.log('value of a', map1.get('a')); // Output: 1
console.log('value of c', map1.get('c')); // Output: 3

// Re assigning the value of a key
map1.set('a', 10);
console.log('value of a', map1.get('a')); // Output: 10

// Checking if a key exists
console.log('is a existings?', map1.has('a')); // Output: true
console.log('is d existings?', map1.has('d')); // Output: false

// Deleting a key
map1.delete('a');
console.log('is a existings?', map1.has('a')); // Output: false

// Iterating over a Map
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (const [key, value] of myMap) {
	console.log(key + ' = ' + value);
}

for (const value of myMap.values()) {
	console.log(value);
}

for (const [key, value] of myMap.entries()) {
	console.log(`${key} = ${value}`);
}

myMap.forEach((value, key) => {
	console.log(`${key} = ${value}`);
});

// Cloning and merging Maps

const originalMap = new Map([[1, 'one']]);
const cloneMap = new Map(originalMap);
console.log(cloneMap.get(1)); // one
console.log(originalMap === cloneMap); // false

const firstMap = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
]);

const secondMap = new Map([
	[4, 'four'],
	[5, 'five'],
]);

const mergedMap = new Map([...firstMap, ...secondMap]);
console.log(mergedMap);

// Set
// Set is a collection of unique values.
// syntax: new Set([iterable])
// iterable: An Array or other iterable object whose elements are values (any iterable object, whose elements are values).
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1); // Set { 1, 2, 3, 4, 5 }

set1.add(6);
console.log(set1); // Set { 1, 2, 3, 4, 5, 6 }
set1.add(3);
console.log(set1); // Set { 1, 2, 3, 4, 5, 6 }
set1.add('some text value');
console.log(set1); // Set { 1, 2, 3, 4, 5, 6, 'some text value' }
const o = { a: 1, b: 2 };
set1.add(o);
console.log(set1); // Set { 1, 2, 3, 4, 5, 6, 'some text value', { a: 1, b: 2 } }

console.log(set1.has(1)); // true
console.log(set1.has(7)); // false
console.log(set1.size); // 8
console.log(set1.has(Math.sqrt(25))); // true
console.log(set1.has('Some Text Value'.toLowerCase())); // true

set1.delete(5);
console.log(set1.has(5)); // false

set1.add(5);
console.log(set1);

// Iterating sets
console.log('============== ForEach ==============');
set1.forEach((value) => {
	console.log(value);
});

console.log('============== For...of ==============');
for (const item of set1) {
	console.log(item);
}
