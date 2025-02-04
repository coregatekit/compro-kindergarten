// Objects
// Objects are used to store collections of data and more complex entities.
// An object is a collection of properties, and a property is an association between a name (or key) and a value.

// Creating an object
// There are two ways to create an object: using an object initializer or using a constructor function.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main St",
    city: "Boston",
    state: "MA",
  },
};
console.log(person);
console.log(typeof person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(`${person.address.city}, ${person.address.state}`);

const person2 = new Object({
  firstName: "Mary",
  lastName: "Smith",
  age: 25,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main St",
    city: "Boston",
    state: "MA",
  },
});
console.log(person2);

const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

console.log(hasPerson("alice"));
console.log(getAge("bob"));
console.log(getAge("charlie"));
