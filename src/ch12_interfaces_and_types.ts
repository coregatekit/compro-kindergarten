// Interfaces and Types

// Interfaces
// An interface is a way to define a contract for an object. It defines the properties and methods that an object must have.
// Syntax:
// interface InterfaceName {
//   property1: type;
//   property2: type;
//   method1(): void;
//   method2(): void;
// }
// Example:
interface Person {
  name: string;
  age: number;
  display(): void;
}

// Implementing an interface
class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let emp = new Employee("John", 30);
emp.display(); // Name: John, Age: 30

// Types
// A type is a way to define a contract for a variable. It defines the type of value that a variable can hold.
// Syntax:
// type TypeName = type;
// Example:
type ID = number;
let id: ID = 1001;
console.log("ID: ", id); // ID: 1001

type Gender = "Male" | "Female" | "Other";

type PersonType = {
  name: string;
  age: number;
};

let person: PersonType = {
  name: "Alice",
  age: 20,
};

console.log("Person Name: ", person.name); // Person Name: Alice
console.log("Person Age: ", person.age); // Person Age: 20

// Using types with interfaces

type StudentID = number;
let studentId: StudentID = 1002;

interface Student {
  id: StudentID;
  name: string;
  age: number;
  gender: Gender;
}

let student: Student = {
  id: 123,
  name: "Alice",
  age: 20,
  gender: "Female",
};

console.log("Student ID: ", student.id); // Student ID: 1002
console.log("Student Name: ", student.name); // Student Name: Alice
console.log("Student Age: ", student.age); // Student Age: 20

// Using types with classes
type ProductID = number;
let productId: ProductID = 1003;

class Product {
  id: ProductID;
  name: string;
  price: number;

  constructor(id: ProductID, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`);
  }
}

let product = new Product(1004, "Laptop", 500);
product.display(); // ID: 1004, Name: Laptop, Price: 500
console.log("Product ID: ", product.id); // Product ID: 1003
console.log("Product Name: ", product.name); // Product Name: Laptop
console.log("Product Price: ", product.price); // Product Price: 500

// In this example, we have defined a type ProductID and used it in the Product class.
// The Product class has an id property of type ProductID.
// We have also defined a variable productId of type ProductID and assigned a value to it.
// We have created an object of the Product class and accessed its properties using the dot notation.

// In TypeScript, you can use interfaces and types to define contracts for objects and variables.
// Interfaces define the properties and methods that an object must have, while types define the type of value that a variable can hold.
// You can use interfaces with classes to implement the contract defined by the interface.
// You can use types with classes to define the type of properties in the class.
// Interfaces and types help you write more robust and maintainable code by enforcing contracts and type safety.

// How interfaces and types are different in TypeScript?
// Interfaces and types are similar in TypeScript, but they have some differences.
// Here are some key differences between interfaces and types:
// 1. Interfaces can only define the structure of an object, while types can define the type of a variable.
// 2. Interfaces can be extended, while types cannot be extended.
// 3. Interfaces can be implemented by classes, while types cannot be implemented.
// 4. Interfaces can have optional properties, while types cannot have optional properties.
// 5. Interfaces can have readonly properties, while types cannot have readonly properties.
// 6. Interfaces can have index signatures, while types cannot have index signatures.
// 7. Interfaces can have call signatures, while types cannot have call signatures.
// 8. Interfaces can have construct signatures, while types cannot have construct signatures.
// 9. Interfaces can have property modifiers, while types cannot have property modifiers.
// 10. Interfaces can have declaration merging, while types cannot have declaration merging.

// When to use interfaces and types in TypeScript?
// You can use interfaces and types in TypeScript based on your requirements.
// Here are some guidelines on when to use interfaces and types:
// 1. Use interfaces when you need to define the structure of an object with properties and methods.
// 2. Use types when you need to define the type of a variable.
// 3. Use interfaces with classes to enforce contracts and type safety.
// 4. Use types with classes to define the type of properties in the class.
// 5. Use interfaces when you need to extend or implement a contract.
// 6. Use types when you need to define a custom type.
// 7. Use interfaces when you need optional or readonly properties.
// 8. Use types when you need union types or intersection types.
// 9. Use interfaces when you need index signatures, call signatures, or construct signatures.
// 10. Use types when you need to define a complex type.

interface Shape {
  height: number;
  width: number;
}

interface Shape {
  color: string;
  width: number;
}

let shape: Shape = {
  height: 10,
  width: 20,
  color: "red",
};

console.log("Shape Height: ", shape.height); // Shape Height: 10
console.log("Shape Width: ", shape.width); // Shape Width: 20
console.log("Shape Color: ", shape.color); // Shape Color: red

type Size = {
    height: number;
    width: number;
}
const bodySize: Size = {
    height: 180,
    width: 70
}
console.log("Body Height: ", bodySize.height); // Body Height: 180

// If we define type with the same name as an interface, it will throw an error.
// type Shape = {
//     color: string;
//     width: number;
// }
// Same name type and interface are not allowed in TypeScript.
// Same type name also not allowed in TypeScript.
// type Size = {
//     color: string;
//     width: number;
// }

// Summary
// In this chapter, we learned about interfaces and types in TypeScript.
// We saw how to define interfaces and implement them in classes.
// We also saw how to define types and use them with interfaces and classes.
// Interfaces define the properties and methods that an object must have, while types define the type of value that a variable can hold.
// You can use interfaces with classes to enforce contracts and type safety.
// You can use types with classes to define the type of properties in the class.
// Interfaces and types help you write more robust and maintainable code in TypeScript.

// In the next chapter, we will learn about modules in TypeScript and how to organize your code using modules.
