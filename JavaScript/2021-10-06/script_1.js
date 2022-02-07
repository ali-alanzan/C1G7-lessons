// variables
// vanilla Javascript
/*
 * let : declared one, used anytime

 */

var year = 2021;
var year = 2022;


// ES 6
// let year = 20; // Error: already declared

/**
 * let:
 * not available to re-decleration
 */
// let year = 20; // Error: already declared

let age = 20; // 
age = 22; // already declared


for ( var x = 0; x < 10; x++   ) {
    x++
}
console.log(x);


for ( let o = 0; o < 10; o++   ) {
    o++;
    console.log(o); 
}
// console.log(o); //  Error: o is not defined


{
    let pp = 19;

    {
    console.log(pp)

    }
}


/**
 * not available to re-assignment
 * not available to re-decleration
 */

const yearReleased = 2021;
// const yearReleased = 2021; //  Error:
// yearReleased = 2022; //  Error:

