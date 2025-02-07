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
