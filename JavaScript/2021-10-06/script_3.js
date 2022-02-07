// Data Types

// Array
var friends = [ 'Ali', 
                1234, 
                null, 
                true,
                false,
                true,
                ['JS', 'HTML', ['anotherValue', 'Test'] ], 
                'Mohammed', 
                'Wadah', 'Yasser', 'Ahmed' ];


console.log( friends, typeof(friends) );

// length 
console.log( friends.length ); // the count of the items

console.log( friends[6][2][1] ); // Test


friends[6][0] = 'JAVA';

console.log( friends, friends[6][0] );


// bug in the language itself
var newFr = friends;
newFr[0] = 'Mahmoud';
console.log(friends)

// create new array and add to it the array we want to copy
// merge
var copiedFr = [ ...friends , 'added' , [ 12, 12] ];
copiedFr[0] = 'Nabil';
console.log(friends, copiedFr);