var myVariable = "Hello, World!";
console.log(myVariable);
myVariable = "TypeScript is awesome!";
console.log(myVariable);

let anotherVariable = 42;
console.log(anotherVariable);
anotherVariable = 100;
console.log(anotherVariable);

const constantVariable = 3.14;
console.log(constantVariable);
// constantVariable = 2.71; // Error: Cannot assign to 'constantVariable' because it is a constant.

// How let and var are different
// var is function scoped
// let is block scoped
{
  let x = 10;
  console.log("X in scope: ", x); // 10
}
// console.log('X out of scope: ', x); // Error: Cannot find name 'x' because x is out of block scoped

// var is function scoped
{
  var y = 20;
  console.log("Y in scope: ", y); // 20
}
console.log("Y out of scope: ", y); // 20

const lineNumber: number[] = [1, 2, 3, 4, 5];
console.log("Line Numbers: ", lineNumber);

const trainOfFruits: string[] = [
  "Locomotive",
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
];
console.log("Train of Fruits: ", trainOfFruits);

const banana = trainOfFruits[2];
console.log("Selected Fruit: ", banana);

const grape = trainOfFruits[4];
console.log("Selected Fruit: ", grape);

console.log("Change from Apple to Mango");
trainOfFruits[1] = "Mango";
console.log("Updated Train of Fruits: ", trainOfFruits);

console.log("Length of Train of Fruits: ", trainOfFruits.length);

console.log(
  "Last Fruit in the Train: ",
  trainOfFruits[trainOfFruits.length - 1]
);
console.log("Access out of bounds index: ", trainOfFruits[10]);

let person: [string, number, Date];
person = ["Aeri", 25, new Date("2000-10-30")];
console.log("Declare tuple variable: ", person);
console.log("Name: ", person[0]);
console.log("Age: ", person[1]);
console.log("Birthdate: ", person[2]);

// destructuring tuple
const [name, age, birthdate] = person;
console.log("Destructured Name: ", name);
console.log("Destructured Age: ", age);
console.log("Destructured Birthdate: ", birthdate);
