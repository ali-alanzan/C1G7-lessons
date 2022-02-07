"use strict";

// Concatenation

var firstName = 'Ali',
lastName = 'Alanzan',
age = 25,
message = 'Hello ' + firstName + ' ' + lastName,
language = 'Arabic';


// languageTwoExample = 'Arabic'; // throws an error with no "use strict"; mood

console.log(message);


message = message + ' and I\'m ' + age;


message += ' years old';

console.log(message);
