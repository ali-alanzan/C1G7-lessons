/**
 * Comparison operators
 *  == : check only the value
 *  !=
 *  === : check the data type equals the data type and the value equals the value
 *  !== : check the data type not equals the data type or the value not equals the value
 *  >   : greater than
 *  <   : less than
 *  >=  : greater than or equals
 *  <=  : less than or equals
 */

// var verifyConfirm = confirm('Are you sure to delete this item?');

// if ( verifyConfirm == true ) {
//     console.log('deleted');
// }


var checkAge = 20;

console.log(checkAge);
if (  checkAge === "20"  ) {
    console.log('you can contninue your school first');

}

var checkMax = 20 > 40; // false
var checkMax = 20 < 40; // true
var checkMax = 20 <= 20; // true
var checkMax = 20 >= 20; // true
