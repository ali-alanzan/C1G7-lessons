/**
 * str.toLowerCase(); 
 * str.toUpperCase();
 * 
 * RegEx: str.function()
 *                    (/value/)
 *                    (/value/g) g: global
 *                    (/value/i) i: case insenistive
 * 
 * str.replaceAll(needle, value)
 *                     
 * 
 */
var fullName = '   !@ Hello ^I\'m Ali !@Alanz^^^an #@#!#@    ',
username = "";

if( fullName.length > 0 ) {
    username = fullName.trim().toLowerCase();
    username = username.replace(/[^A-z0-9\.\-\ ]/g, '').replaceAll('^', '').trim().replace(/ /g, '-');

    alert('Your cusomized username is: ' + username);
}

console.log(username.toUpperCase());



var message = 'Hello Computer Programming';

// console.log( message.toLowerCase().search('programming') );
var word = new RegExp('programming', 'i');
console.log( message.search(word) );


