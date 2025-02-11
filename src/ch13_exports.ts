// Keywords export, import, module, namespace, require, export =, export default

// Exporting a module
export const PI = 3.14;
export function add(a: number, b: number): number {
  return a + b;
}
export interface IEmployee {
  name: string;
  salary: number;
}
export class Person implements IEmployee {
  constructor(public name: string, public salary: number) {}
}

// Exporting a module using export = syntax
export default function greet(name: string): string {
  return `Hello ${name}`;
}

// Exporting a namespace
export namespace Math {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

const coinList = ['BTC', 'ETH', 'XRP'];
const colorList = ['Red', 'Green', 'Blue'];
function getCoinList(): string[] {
  return coinList;
}
export {
  coinList,
  colorList,
  getCoinList,
}
