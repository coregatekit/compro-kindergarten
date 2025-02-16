// Exercise 1 - Grading
// Give a grade to a student based on the average of three numbers.
//
// Write a program that number as input to calculate the student grade.
// If the student's score is greater than or equal to 80, the grade is A.
// If the student's score is greater than or equal to 70, the grade is B.
// If the student's score is greater than or equal to 60, the grade is C.
// If the student's score is greater than or equal to 50, the grade is D.
// If the student's score is less than 50, the grade is F.
// The program should output the grade.

// Input: 88, 61, 59, 45
// Output:
// The grade is A.
// The grade is C.
// The grade is D.
// The grade is F.

const score = 80;

if (score >= 80) {
  console.log("The grade is A.");
} else if (score >= 70) {
  console.log("The grade is B.");
} else if (score >= 60) {
  console.log("The grade is C.");
} else if (score >= 50) {
  console.log("The grade is D.");
} else {
  console.log("The grade is F.");
}

// Exercise 2 - Buy a fruit
// Write a program that will output the price of a fruit.
// The program should output the price of the fruit based on the fruit name.
// If the fruit is an apple, the price is $1.00.
// If the fruit is an orange, the price is $0.80.
// If the fruit is a banana, the price is $0.50.
// If the fruit is a mango, the price is $2.00.
// If the fruit is a grape, the price is $0.10.

// Input: banana
// Output: The price of the banana is $0.50.

enum Fruits {
  Apple = "apple",
  Orange = "orange",
  Banana = "banana",
  Mango = "mango",
  Grape = "grape",
  Other = "other",
}

const selectedFruit: Fruits = Fruits.Mango;

switch (selectedFruit) {
  case Fruits.Apple:
    console.log("The price of the apple is $1.00.");
    break;
  case Fruits.Orange:
    console.log("The price of the orange is $0.80.");
    break;
  case Fruits.Banana:
    console.log("The price of the banana is $0.50.");
    break;
  case Fruits.Mango:
    console.log("The price of the mango is $2.00.");
    break;
  case Fruits.Grape:
    console.log("The price of the grape is $0.10.");
    break;
  default:
    console.log("The price of the fruit is unknown.");
}

// Exercise 3 - Day of the week

// Write a program that will output the day of the week.
// The program should output the day of the week based on the day number.
// If the day number is 1, the day is Monday.
// If the day number is 2, the day is Tuesday.
// If the day number is 3, the day is Wednesday.
// If the day number is 4, the day is Thursday.
// If the day number is 5, the day is Friday.
// If the day number is 6, the day is Saturday.
// If the day number is 7, the day is Sunday.
// If the day number is not between 1 and 7, throw an error "the day is unknown".
// And after the program finished. It should print the message "The program has ended."

const dayNumber: number = 3;

try {
  switch (dayNumber) {
    case 1:
      console.log("The day is Monday.");
      break;
    case 2:
      console.log("The day is Tuesday.");
      break;
    case 3:
      console.log("The day is Wednesday.");
      break;
    case 4:
      console.log("The day is Thursday.");
      break;
    case 5:
      console.log("The day is Friday.");
      break;
    case 6:
      console.log("The day is Saturday.");
      break;
    case 7:
      console.log("The day is Sunday.");
      break;
    default:
      throw new Error("The day is unknown.");
  }
} catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log("An error occurred.", error);
} finally {
    console.log("The program has ended.");
}
