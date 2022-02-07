/**
 * Array.concat(Array, Items)
 * Array.pop();   Remove the last item of the array
 * Array.shift();  Remove the first item of the array
 * Array.splice(index, deleteCount); 
 * Array.splice(Array.length, 0, items); add items to array without delete any other items 
 * 
 * Array.indexOf('value'); 
 * 
 * Array.slice(indexStart, indexEnd)
 * 
 */
var firstFriendsArray = ['Ahmed', ' And ', 'Mahmoud', 'Mohammed'];

var otherFriends = ['nabil', 'adel', 'ahmed'];

var friends = firstFriendsArray.concat(otherFriends, [ 'test' ]);

console.log(friends);


// Remove the last item of the array
friends.pop();
console.log(friends);

// Remove the first item of the array
friends.shift();
console.log(friends);


var searchFor = friends.indexOf('Mohammed');
console.log(searchFor);
friends.splice(searchFor, 1);
console.log(friends);


var lastTwoItems = friends.slice(1, 3);
console.log(lastTwoItems);

friends.splice(friends.length, 0, 'Roma', 'Dalida', ...['Ahmed', 'Adel'],  ['Ahmed', 'Adel']);
console.log(friends);
