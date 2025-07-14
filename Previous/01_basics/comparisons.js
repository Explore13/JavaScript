console.log("2" > 1);
console.log("02" > 1);
// Please assure that the datatypes are same during comparison, otherwise it may give unwanted result

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // Unpredicted result because null is converted to a number, it is treating as 0. That's why null >= 0 is true and null > 0 is false


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Don't do that.
// Note :  Comparison and equality check are not same


console.log("2"==2); // true
console.log("2"===2); // false