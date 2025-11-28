console.log("Hello, World!");

// console.log("This is a single comment line.");
// This is another single comment line.
// console.log(3 * 5);

/*
  console.log("This is a multi-line comment example.");
  This is a multi-line comment.
  It can span multiple lines.
*/
console.log("Outside multi-line comment.");

/**
 *
 * @param length - The length of box
 * @param width - The width of box
 * @returns {number} - The area of box
 */
function calcuateSqaureBoxArea(length: number, width: number): number {
  return length * width;
}

console.log("Area of box: ", calcuateSqaureBoxArea(5, 10));
