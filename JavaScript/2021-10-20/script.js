/**
 * str.search(value); return -1 if not exist or index if the value exist
 */
var message = "Iam from asia and asia is a good ppl";

console.log(message.match('asia')); // 9  //search for a string
console.log(message.match(/asia/)); // {,, indeX: 9}
console.log(message.match(/asia/g)); // RegEx:  g: global

var email = `alialanzan.aaonlinegmail.com`;

var checkEmail = email.search(/[^A-z0-9\.\@\-]/);
    
if( checkEmail  > -1 ) {
    
    message = 'please check your email, the char ( ' + email.charAt(checkEmail) + ' )';

} else if( email.search('@') == -1 || email.match(/@/g).length != 1) {

    message = 'your email is not correct';

} else {
    message = 'email is correct';
}

alert(message);