/**
 * Group Operator (   )
 * caclcaulation logic steps:
 *  1 - (        )
 *  2 - Division " / " & Multiplication " * "
 *  3 - Addition: " + " & Sum: " -" 
 */

var total = 10 * 2 + ( 30 - 4 );
 

var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9