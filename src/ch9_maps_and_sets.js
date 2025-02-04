// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// syntax: new Map([iterable])
// iterable: An Array or other iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, 'one' ],[ 2, 'two' ]]).
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
console.log(map1.get("a")); // 1
console.log(map1.get("b")); // 2
console.log(map1.get("c")); // 3

map1.set("a", 97);
console.log(map1.get("a")); // 97

console.log(map1.has("a")); // true
console.log(map1.size); // 3

map1.delete("b");
console.log(map1); // Map { 'a' => 97, 'c' => 3 }

map1.clear();
console.log(map1); // Map {}

// More example
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
console.log(contacts.has("Jessie")); // true
console.log(contacts.get("Hilary")); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
console.log(contacts.get("Jessie")); // { phone: '213-555-1234', address: '123 N 1st Ave' }
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts);
// Map(1) {
//      'Hilary' => { phone: '617-555-4321', address: '321 S 2nd St' }
// }
console.log(contacts.size); // 1

// Iterating over a Map
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(key + " = " + value);
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

const originalMap = new Map([[1, "one"]]);
const cloneMap = new Map(originalMap);
console.log(cloneMap.get(1)); // one
console.log(originalMap === cloneMap); // false

const firstMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const secondMap = new Map([
  [4, "four"],
  [5, "five"],
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
set1.add("some text value");
console.log(set1); // Set { 1, 2, 3, 4, 5, 6, 'some text value' }
const o = { a: 1, b: 2 };
set1.add(o);
console.log(set1); // Set { 1, 2, 3, 4, 5, 6, 'some text value', { a: 1, b: 2 } }

console.log(set1.has(1)); // true
console.log(set1.has(7)); // false
console.log(set1.size); // 8
console.log(set1.has(Math.sqrt(25))); // true
console.log(set1.has("Some Text Value".toLowerCase())); // true

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
