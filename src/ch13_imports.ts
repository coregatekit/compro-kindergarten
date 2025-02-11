// Keywords export, import, module, namespace, require, export =, export default

// Importing a module
import { PI, add, Person } from './ch13_exports';
import type { IEmployee } from './ch13_exports';

console.log(PI); // 3.14
console.log(add(10, 20)); // 30
const emp: IEmployee = { name: 'John', salary: 10000 };
console.log(emp); // { name: 'John', salary: 10000 }

const person = new Person('John', 10000);
console.log(person); // Person { name: 'John', salary: 10000 }
console.log(person instanceof Person); // true

// Importing a module using import = syntax
import greet from './ch13_exports';
console.log(greet('John')); // Hello John

// Importing a namespace
import { Math } from './ch13_exports';
console.log(Math.add(10, 20)); // 30

// Importing a module using export = syntax
import * as coinModule from './ch13_exports';
console.log(coinModule.coinList); // ['BTC', 'ETH', 'XRP']
console.log(coinModule.colorList); // ['Red', 'Green', 'Blue']
console.log(coinModule.getCoinList()); // ['BTC', 'ETH', 'XRP']
