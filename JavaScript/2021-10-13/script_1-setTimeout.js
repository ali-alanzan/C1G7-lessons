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



function testSwitch(ageUser) {

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

}


if( askUser != "" && askUser != null && !isNaN(askUser) ) {
    
    var ageUser = calcAge(askUser);
    document.body.innerHTML += makeElement('Please wait');
    setTimeout(testSwitch, 2000, ageUser);
   
    // Reference to timer
    var timerId = setTimeout(function () { alert('5s')  }, 5000); // return timerId
    clearTimeout(timerId); // 

} else {
    document.write('sorry, we do not understand your answer');
}


