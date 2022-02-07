// synchronous code
console.log('Hello node');

// Asynchronous code
setTimeout(function () {
    console.log('Hello after 5s ');
}, 5000);

setInterval(function () {
    console.log('Hello every 2s');
}, 2000 );


// synchronous code
console.log('Hello again');