"use strict";
var askUser = prompt('what your birthDate?');


function calcAge( birthDate ) {
    if ( isNaN(birthDate) ) {
        alert(" your birthDate is not correct");
    } else {
        var date = new Date(); 
        return date.getFullYear() - birthDate; 
    }
   
}

function makeElement(message) {
    return '<p>' + message + "</p>";
}

console.log(111);


if( askUser != "" && askUser != null && !isNaN(askUser) ) {
    var ageUser = calcAge(askUser);
    document.body.innerHTML += makeElement('Please wait');
    setTimeout(function () {

        switch(true) {
            case ageUser > 20:
                document.body.innerHTML = '';
                document.body.innerHTML += makeElement( 'ok, we will text you' );
                break;
            case ageUser < 20:
                document.write('after ' + (20-ageUser) + ' years try again' );
                break;
            default: 
            document.write('sorry, your age not worked');
                break;
        } 
    
    
    }, 2000, ageUser);
} else {
    document.write('sorry, we do not understand your answer');
}


