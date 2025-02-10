// Classes in TypeScript
//
// Classes are a blueprint for creating objects with specific properties and methods.
// syntax:
// class name {
//   constructor(parameters) {
//
//   }
//
//   method1() {
//    // code
//   }
// }
//
// Example:

class Car {
  // Properties
  model: string;
  price: number;

  // Constructor
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  // Method
  display(): void {
    console.log(`Model: ${this.model}, Price: ${this.price}`);
  }
}

// Create an object of Car class
let car1 = new Car("BMW", 50000);
car1.display(); // Model: BMW, Price: 50000
console.log("Car model: ", car1.model); // Car model: BMW
console.log("Car price: ", car1.price); // Car price: 50000

// Another way to define class

const Rectangle = class {
  // Properties
  width: number;
  height: number;

  // Constructor
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Method
  area(): number {
    return this.width * this.height;
  }
};

const rect = new Rectangle(10, 20);
console.log("Area of rectangle: ", rect.area()); // Area of rectangle: 200
console.log("Width: ", rect.width); // Width: 10
console.log("Height: ", rect.height); // Height: 20

// Private and Public Access Modifiers
//
// TypeScript supports public, private, and protected access modifiers.
// By default, all members of a class are public.
// Public members can be accessed from outside the class.
// Private members can only be accessed within the class.
// Protected members can be accessed within the class and its subclasses.

// Example:

class Employee {
  private empId: number;
  empName: string;

  constructor(empId: number, empName: string) {
    this.empId = empId;
    this.empName = empName;
  }

  display(): void {
    console.log(`EmpId: ${this.empId}, EmpName: ${this.empName}`);
  }
}

const emp = new Employee(101, "John");
emp.display(); // EmpId: 101, EmpName: John
// console.log(emp.empId); // Error: Property 'empId' is private and only accessible within class 'Employee'.

// If we want to access the private member, we can create a getter method.
class Employee2 {
  private empId: number;
  empName: string;

  constructor(empId: number, empName: string) {
    this.empId = empId;
    this.empName = empName;
  }

  getEmpId(): number {
    return this.empId;
  }

  display(): void {
    console.log(`EmpId: ${this.empId}, EmpName: ${this.empName}`);
  }
}
const emp2 = new Employee2(102, "Smith");
emp2.display(); // EmpId: 102, EmpName: Smith
console.log("Employee Id:", emp2.getEmpId()); // 102

class PrivateMessage {
  from: string;
  to: string;
  private message: string;
  isSent: boolean = false;

  constructor(from: string, to: string, message: string) {
    this.from = from;
    this.to = to;
    this.message = message;
  }

  sendMessage(): void {
    if (this.isSent) {
      console.log("Message already sent.");
    }
    this.isSent = true;
    // console.log(`Message: ${this.message}`);
  }

  readMessage(reader: string): string {
    if (!this.isSent) {
      return "Message not sent yet.";
    }

    if (reader === this.to || reader === this.from) {
      return `Message: ${this.message} Read by: ${reader}`;
    } else {
      return "You are not authorized to read this message.";
    }
  }
}

const msg = new PrivateMessage("Giselle", "NingNing", "Be my little secret.");
console.log(msg);

// Karina tries to read the message
console.log(msg.readMessage("Karina"));

// Giselle sends the message
console.log("Giselle sends the message");
msg.sendMessage();

// Karina tries to read the message
console.log(msg.readMessage("Karina"));

// NingNing reads the message
console.log(msg.readMessage("NingNing"));

// Giselle tries to read the message
console.log(msg.readMessage("Giselle"));


// Static Members
//
// Static members belong to the class instead of the object.
// Static members are accessed using the class name.
// Static members are used to define properties and methods that are common to all objects of the class.

// Example:

class Financial {
  static rate: number = 0.1;

  static calculateInterest(principal: number): number {
    return principal * this.rate;
  }
}

console.log(Financial.rate); // 0.1
console.log(Financial.calculateInterest(1000)); // 100

const interestCalculator = new Financial();
// console.log(interestCalculator.rate); // undefined
// console.log(interestCalculator.calculateInterest(1000)); // Error: interestCalculator.calculateInterest is not a function

// Inheritance

// Inheritance allows a class to inherit properties and methods from another class.
// TypeScript supports single and multilevel inheritance.
// A subclass inherits from a superclass.
// A subclass can override the properties and methods of the superclass.

// Example:
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayWith(recipient: string, msg: string): void {
    console.log(`${this.name} says to ${recipient}: ${msg}`);
  }
}

class Student extends Person {
  grade: string;
  school: string;

  constructor(name: string, grade: string, school: string) {
    super(name);
    this.grade = grade;
    this.school = school;
  }

  describe(): void {
    console.log(`${this.name} is in grade ${this.grade} at ${this.school}`);
  }

  study(subject: string): void {
    console.log(`${this.name} studies ${subject}`);
  }
}

const student1 = new Student("Winter", "5", "Hogwarts");
console.log(student1);
student1.describe();
student1.sayWith("Bob", "Hello");
student1.study("Potion");

// Inheritance and Method Overriding
// Inheritance allows a subclass to inherit properties and methods from a superclass.
// A subclass can override the properties and methods of the superclass.
// The super keyword is used to access the superclass properties and methods.
// The super keyword is used to call the constructor of the superclass.

// Example:
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Dog barks");
  }

  display(): void {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

class Cat extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log(`${this.name} meows`);
  }
}

const dog1 = new Dog("Jummeng", "Golden Retriever");
// console.log(dog1);
dog1.makeSound(); // Dog barks
dog1.display(); // Name: Jummeng, Breed: Golden Retriever

const cat1 = new Cat("Chalarm", "Scottish Fold");
// console.log(cat1);
cat1.makeSound(); // Cat meows

const cat2 = new Cat("Platoo", "American Shorthair");
// console.log(cat2);
cat2.makeSound(); // Cat meows

// Abstract Classes
//
// Abstract classes are used to define a blueprint for other classes.
// Abstract classes cannot be instantiated.
// Abstract classes can have abstract methods.
// Abstract methods must be implemented by the subclass.

// Example:
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }

  area(): number {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle area: ", circle.area()); // Circle area: 78.53981633974483

const triangle = new Triangle(10, 5);
console.log("Triangle area: ", triangle.area()); // Triangle area: 25
