// Array
// var member = new Array();
/**
 * Array.push(items); add the items to the end of the array
 * Array.unshift(items);  add the items to the beginning of the array
 * 
 * String.split(separator); convert the string to array
 *  
 */

var members = ['Ali', 'Wadah']; // recommended
members[0] = 'Mahmoud'; // will change Ali to Mahmoud

members[members.length] = 'Yasser';
members[10] = 'Yasser';
members[members.length] = 'Ahmed';

console.log(members);

members.push('Ahmed'); // 
members.push('Nabil', 'Yasser', ...['Roby', 'Menna']);

members.unshift('inTop'); // index 0
members.unshift('firstElementAgain'); // index 0


var ourMembersString = 'Suzan And Rnda And Hanen';
var convertedOurMembersStringToArray = ourMembersString.split(' And '); // String to Array


members.unshift(...convertedOurMembersStringToArray);

console.log(members);



