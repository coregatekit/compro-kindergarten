// Exports in javascript

// // Exporting declarations
// export let name1, name2/*, … */; // also var
// export const name1 = 1, name2 = 2/*, … */; // also var, let
// export function functionName() { /* … */ }
// export class ClassName { /* … */ }
// export function* generatorFunctionName() { /* … */ }
// export const { name1, name2: bar } = o;
// export const [ name1, name2 ] = array;

// // Export list
// export { name1, /* …, */ nameN };
// export { variable1 as name1, variable2 as name2, /* …, */ nameN };
// export { variable1 as "string name" };
// export { name1 as default /*, … */ };

// // Default exports
// export default expression;
// export default function functionName() { /* … */ }
// export default class ClassName { /* … */ }
// export default function* generatorFunctionName() { /* … */ }
// export default function () { /* … */ }
// export default class { /* … */ }
// export default function* () { /* … */ }

// // Aggregating modules
// export * from "module-name";
// export * as name1 from "module-name";
// export { name1, /* …, */ nameN } from "module-name";
// export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
// export { default, /* …, */ } from "module-name";
// export { default as name1 } from "module-name";

import {
  thai,
  japan,
  thailand,
  nippon,
  eat,
  drink as iDrink,
} from "./export_list.js";
import Person from "./export_default_class.js";
import sayHi from "./export_default_function.js";
import { aespaMember, sayHello, sushi, tomyum, User } from "./export_declarations.js";

function main() {
  console.log(thai); // Thailand
  console.log(japan); // Japan
  console.log(thailand); // Thailand
  console.log(nippon); // Japan

  eat(); // Eating
  iDrink(); // Drinking

  const winter = new Person("Winter");
  winter.sayHello(); // Hello, Winter!

  sayHi(); // Hi

  sayHello(); // Hello

  const user = new User("John");
  console.log(user);
  console.log(user.name); // John

  console.log(`I want to eat ${tomyum} and ${sushi}`);

  aespaMember.forEach((member) => {
    console.log(`aespa member: ${member}`);
  });
}

export default main;
