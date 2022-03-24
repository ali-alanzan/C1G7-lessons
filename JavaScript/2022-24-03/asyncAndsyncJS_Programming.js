/**
 * sync: complied and executed directly
 * async:
 *  complied
 *  Tasks:   i.e: setInterval
 *           Task every amount 
 *  Tasks:
 *          After amount of time
 */
console.log('Hello Node '); // sync
Math.min(1,23,1,.2); // .2  // sync



var idInterval = setInterval(function () {
    console.log('Hello Interval'); // sync

}, 500);


setTimeout(function ( ) { //     Task after 2 Secs
    clearInterval(idInterval); //     Task after 2 Secs

    // Task will started after 2 Secs
    setTimeout(function () { //     Task after 2 Secs
     
        console.log('10 secs'); //     Task after 10 Secs
    
    
    }, 10000);
}, 2000); 

// for (;;) {
    // console.log('Hello Node ');
// }