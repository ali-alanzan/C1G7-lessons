var askQuestion = prompt("AboSalah is the best football player?, please answer true if that is okay?");

/**
 * trim: remove all the spaces around the text
 * stringValue.trim();
 * stringValue.trimStart();
 * stringValue.trimStart();
 */

// shorthand if statement
// condition ? valueIfTrue : valueIfFalse ;
var finalAskQuestion = askQuestion != null ? askQuestion.trim() : false;


console.log( finalAskQuestion, Boolean(finalAskQuestion) );

if ( Boolean(finalAskQuestion) == false ) {

    alert('ok');

} else if( finalAskQuestion != 'true' ) {

    alert('that is true ');

} else {
    alert(' true is not the correct answer ');
}