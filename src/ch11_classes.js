/**
 * This file demonstrates the concept of classes in JavaScript.
 * Classes are a template for creating objects and encapsulate data with code to work on that data.
 */
// Classes

class Person {
  constructor(firstName, lastName, dob) {
    // Public properties
    // These properties can be accessed from outside the class.
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  getAge() {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  sayWith(name) {
    return `Hello ${name}, I'm ${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe", "1997-08-23");
console.log(person1);
console.log(typeof person1);
console.log(person1.greeting());
console.log(person1.getAge());
console.log(person1.sayWith("Alice"));

const Reactangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
};

const rect1 = new Reactangle(10, 20);
console.log(rect1);
console.log(rect1.getArea());
console.log("This reactangle height is " + rect1.height);
console.log("This reactangle width is " + rect1.width);

// Getter Setter
// Getters are used to access the properties of an object.
// Setters are used to change the properties of an object.
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get getRadius() {
    return this._radius;
  }

  set setRadius(radius) {
    this._radius = radius;
  }
}
const circleA = new Circle(2);
console.log(circleA);
console.log("The radius of the circle A is " + circleA.getRadius);
circleA.setRadius = 3;
console.log("The new radius of the circle A is " + circleA.getRadius);

// We do not have to use the get and set keywords.
// We can use the get and set methods directly in the class.

class Circle2 {
  constructor(radius) {
    this.radius = radius;
  }
}

const circleB = new Circle2(4);
console.log(circleB);
console.log("The radius of the circle B is " + circleB.radius);
circleB.radius = 5;
console.log("The new radius of the circle B is " + circleB.radius);

// Private properties
// In JavaScript, there are no private properties.
// However, we can use the WeakMap to create private properties.

class PrivateMessage {
  #from;
  to;
  #message;

  constructor(from = "Anonymous", to, msg) {
    this.#from = from;
    this.to = to;
    this.#message = msg;
  }
}

const msg1 = new PrivateMessage(undefined, "Alice", "Hello Alice");
console.log(msg1);
// console.log(`Message from ${msg1.#from} to ${msg1.to}: ${msg1.#message}`);
// The above line will throw an error because #from and #message are private properties.

// How can we access the private properties?
// We can use the getter method to access the private properties.

class PrivateMessage2 {
  from;
  to;
  #message;

  constructor(from, to, msg) {
    this.from = from;
    this.to = to;
    this.#message = msg;
  }

  get message() {
    return this.#message;
  }
}

const msg2 = new PrivateMessage2(undefined, "Bob", "Hello Bob");
console.log(msg2);
console.log(`Message from ${msg2.from} to ${msg2.to}: ${msg2.message}`);

class AnotherPrivateMessage {
  from;
  to;
  #message;
  isSent = false;

  constructor(from, to, msg) {
    this.from = from;
    this.to = to;
    this.#message = msg;
  }

  send() {
    this.isSent = true;
    return `Message from ${this.from} to ${this.to} has been sent.`;
  }

  readMessage(opener) {
    if (!this.isSent) {
      return "This message has not been sent yet.";
    }

    if (opener === this.to || opener === this.from) {
      return `Reader: ${opener}, Message: ${this.#message}`;
    } else {
      return "You are not the recipient of this message.";
    }
  }
}

const msg3 = new AnotherPrivateMessage(
  "Giselle",
  "NingNing",
  "Be my litter secret."
);
console.log(msg3);

// Karina tries to read the message
console.log(msg3.readMessage("Karina"));

// Giselle sends the message
console.log(msg3.send());

// Karina tries to read the message again
console.log(msg3.readMessage("Karina"));

// NingNing reads the message
console.log(msg3.readMessage("NingNing"));

// Giselle tries to read the message
console.log(msg3.readMessage("Giselle"));

// Static methods
// Static methods are called without instantiating their class and cannot be called through a class instance.
// Static methods are often used to create utility functions for an application.

class Financial {
  static interestRate = 5;

  static calculateInterest(principal, time) {
    return (principal * this.interestRate * time) / 100;
  }
}

const financeCalulator = new Financial();

// static properties can be accessed from the class itself only.
console.log(financeCalulator.interestRate); // undefined
console.log(Financial.interestRate); // 5

// console.log(financeCalulator.calculateInterest(1000, 2)); // TypeError: financeCalulator.calculateInterest is not a function
console.log(Financial.calculateInterest(1000, 5, 2));

// Inheritance
// Inheritance is a mechanism where a new class inherits properties and methods from an existing class.

class Personx {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayWith(recipient, msg) {
    return `Hello ${recipient}, I'm ${this.firstName} ${this.lastName}. ${msg}`;
  }
}

// extends keyword is used to create a class that is a child of another class.
class Student extends Personx {
  constructor(firstName, lastName, school) {
    // super() is used to call the constructor of the parent class.
    // eqaul to Person.call(this, firstName, lastName);
    super(firstName, lastName);
    this.school = school;
  }

  study(subject) {
    return `${this.firstName} ${this.lastName} is studying ${subject} at ${this.school}.`;
  }
}

const student1 = new Student("Ning", "Ning", "Hogwarts");
console.log(student1);

console.log(student1.sayWith("Alice", "How are you?"));
console.log(student1.study("Potions"));

const karina = new Personx("Karina", "Bluu");
console.log(karina);
console.log(karina.sayWith("Winter", "Hi Winter!"));
// console.log(karina.study("Potions")); // TypeError: karina.study is not a function

// Overriding methods
// A child class can override a method from the parent class.
class Teacher extends Personx {
  constructor(firstName, lastName, subject) {
    super(firstName, lastName);
    this.subject = subject;
  }

  // Overriding the sayWith method
  // The sayWith method in the Teacher class overrides the sayWith method in the Personx class.
  sayWith(recipient, msg) {
    return `Hello ${recipient}, I'm ${this.firstName} ${this.lastName}. I teach ${this.subject}. ${msg}`;
  }
}

const teacher1 = new Teacher("Winter", "Kim", "Math");
console.log(teacher1);
console.log(teacher1.sayWith("Giselle", "How are you?"));
