// Relational operators
/**
 * in : 
 *    indexNumber in array: for using with array search for the index
 *    'keyName' in object: for using with object search for the key
 * 
 */

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees); // true

//  0 in trees;        // returns true
//  3 in trees;        // returns true
//  6 in trees;        // returns false
//  'bay' in trees;    // returns false (you must specify the index number,
//                     // not the value at that index)
//  'length' in trees; // returns true (length is an Array property)

 

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in mycar);  // returns true
