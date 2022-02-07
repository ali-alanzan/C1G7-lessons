// Arithmetic Operators
/**
 * +
 * -
 * *
 * /
 * %
 */

// Addition
var num = 12 + 10;
console.log(num);
num += 10;
console.log(num);
console.log('======================================');


// Submission
var num = 12 - 10;
console.log(num);
num -= 2;
console.log(num);
console.log('======================================');


// Multiplication
var num = 12 * 10;
console.log(num);
num *= 2;
console.log(num);
console.log('======================================');



// Division
var num = 120 / 10;
console.log(num);
num /= 2;
console.log(num);
console.log('======================================');



// Modules
// return the rest of the divisino
var num = 138 % 10;  // the division result equals 13 and the remaining of 138 is 8
console.log(num);
num %= 2; // 0
console.log(num);
console.log('======================================');


// increment
// Post Increment
var number = 10;
console.log(number); // 10
console.log(number++); // 10
console.log(number); // 11
number++;
console.log(number); // 12
console.log(' Pre Increment ======================================');

// Pre Increment
var number = 10;
console.log(number); // 10
console.log(++number); // 11

console.log('======================================');

// Decrement
// Post Decrement
var number = 10;
console.log(number); // 10
console.log(number--); // 10
console.log(number); // 9
number--;
console.log(number); // 8
console.log(' Pre Decrement ======================================');
// Pre Decrement
var number = 10;
console.log(number); // 10
console.log(--number); // 9