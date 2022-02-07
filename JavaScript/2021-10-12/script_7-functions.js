"use strict";
// functions

function sayHello() {
    
    document.write('Hello World <br>');
    document.write('Hello World <br>');
    document.write('Hello World <br>');

}
// sayHello(); // call to the function from local scope

function sayHelloToSm( name, year = 1990 ) {
    sayHello(); // call to the function from function scope
    document.write('Hello ' + name + " <br> " + " and the year is " + year + " <br> " );

   // code
   var date = new Date(); 
}


function sayHelloToSmWithRt( name, year = 1990 ) {
    sayHello(); // call to the function from function scope
    document.write('Hello ' + name + " <br> " + " and the year is " + year + " <br> " );

   // code
   var date = new Date(); 
   return date.getFullYear() - year; 
}


sayHelloToSm(  "WadaH", 2021  );
sayHelloToSm( "Yasser", 2021 );
sayHelloToSm( "Ali", 2021 );
sayHelloToSm( "Ahmed" );

console.log( sayHelloToSm( "Nabil" ) ); // undefined becuase it without rerutn





//####### return
var shToSm =  sayHelloToSmWithRt( "Nabil", 2012 );

switch(true) {
    case shToSm > 20:
        document.write('ok, we will text you');
        break;
    case shToSm < 20:
        document.write('after ' + (20-shToSm) + ' contact us again' );
        break;
    default: 
    document.write('sorry, your age not worked');
        break;
} 




