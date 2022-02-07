// Assignment Operators
/**
 *  =: give a value to a variable
 * +=: varName += 'value'; 
 * 
 * 
 * when using + with strings will be a string operator
 * 
 */
var message = 'Easy Assignment';

message += ' and this was is a good way';

var testSumOperator = 12 + "12"; // 1212

var testSumOperator = 12 + 12; // 24
var testSumOperator = 12 + Number("12"); // 24
var testSumOperator = 12 + parseInt("12"); // 24
var testSumOperator = 12 + parseFloat("12.1"); // 24

console.log(  testSumOperator   );

var testBoolean = Boolean(" "); // true
var testBoolean = Boolean(" ".trim() ); // false
var testBoolean = Boolean("anyValue"); // true

var testBoolean = Boolean(""); // false
var testBoolean = Boolean(0); // false
var testBoolean = Boolean(null); // false

