/**
 * str.endsWith(value)
 * str.startsWith(value)
 * message.includes(value)
 */

 var link = 'http://google.com';

 if( link.length >= 10 && (link.startsWith('http://') || link.startsWith('https://')) ) {
     console.log('link is correct');
 } else {
     console.log('link is not correct');
 }
 
 
 var skills = ['HTML', 'Computer Programming', 'Java Programming'];
 
 skills.forEach(function (val) {
     if( val.toLowerCase().endsWith('programming') ) {
         console.log(val);
     }
 });

 var str1 = 'Hello ', 
 str2 = 'World',
 string = str1.concat(str2);


 var message = ' Iam in norway Iam feeling cold';
 console.log(message.includes('norway'));

