// Objects
// Objects are used to store collections of data and more complex entities.
// In JavaScript, objects penetrate almost every aspect of the language.
// You can create an object using an object literal.

// Object literal
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 Main St',
		city: 'Boston',
		state: 'MA',
	},
};

// accessing properties
console.log(person);
console.log(typeof person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(`${person.address.city}, ${person.address.state}`);

// add properties
person.email = 'test@example.com';
console.log(person);

// destructuring
const { firstName, lastName, address: { city } } = person;
console.log(`${firstName} ${lastName}, live in ${city}`);
