// Logic Operators
/**
 * &&: when using && symbol must be all the conditions are true to be the result equals to true
 * ||: when using || symbol expect only one condition to be true to be the result equals to true
 * 
 * ! : NOT
 * 
 */

var age = 22,
country = 'Egypt',
checkAge = age > 20;


if  ( checkAge &&  ( country == 'Egypt' || country == 'NR' )  ) {

    alert('Welcome to our Course');

} else if ( checkAge && ( country == 'Syria' || country == 'Iraq' )  ) {

    alert('Sorry, our course not supported in your country ');

} else if ( !checkAge && country == 'Germany'  ) {

    alert('your age is accepted in Germany Courses ');

} else {
    alert('your age or your country not qualified')
}

var experience = 3,
salary = 7000;

// Conditional (ternary) operator shorthand if statement
var getEmployeeLap = experience >= 2 && salary >= 4000 ? 'new lap' : ' not qualified to get new lap';

console.log(getEmployeeLap);