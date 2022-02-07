// for ( var key in object) {
    // do something 
// }

var obj = { name: "Ahmed",   grade: "40", gradePercentage: "50",    status: "passed", };

var t = 1;

for ( var key in obj) {

    var property = key.toUpperCase();
    var value = obj[key];

    document.write( t + ` - <strong> ${property} </strong> : ${value} <br/>`);
    t++;
}

document.write('<ol>');
for ( var key in obj) {

    var property = key.toUpperCase();
    var value = obj[key];

    document.write( ` <li> <strong> ${property} </strong> : ${value} <br/> </li> `);
}
document.write('</ol>');