// NPM (Node Package Manager)
// npm is a pakcage manager for Node.js packages, or modules
// npm is also the world's largest software registry

// to install package
// npm install <package_name> 
// npm install lodash

// but we use bun as javascript runtime, so we use bun to install package
// bun add <package_name> 
// bun add is-odd

// import package
import isOdd from 'is-odd';
console.log(isOdd(3)); // true
console.log(isOdd(4)); // false

// import package with commonjs
const isOdd2 = require('is-odd');
console.log(isOdd2(3)); // false
console.log(isOdd2(4)); // true
