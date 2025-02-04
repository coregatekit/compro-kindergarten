export default class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}
