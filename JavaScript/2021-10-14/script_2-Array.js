// Array
/**
 * var cars = [];
 * Array.isArray(cars);
 * Array.forEach(function (value, index) {
 *  // code
 * });
 */
var carsInPark = ['Tesla', 'BMW', 'Tesla', 'Merceds', 'TOYOTA', 'GMC', 'Tesla', 'GMC'],
teslaCount = 0,
teslaInPark = [];


// var firstTesla = cars.indexOf('Tesla'); // the first item from the start of the array

// // the first item from the end of the array
// var lastTesla = cars.lastIndexOf('Tesla'); 

// console.log(firstTesla);
// console.log(lastTesla);


if ( Array.isArray(carsInPark) ) {
    
    carsInPark.forEach( function (value, index) {
        if( value == 'Tesla' ) {
            teslaCount++;
            teslaInPark.push(index);
        }
    } );

    console.log(teslaInPark)

    if( teslaCount > 0 ) {
        var numTesla = 1;
        teslaInPark.forEach(function (value) {
            document.body.innerHTML += `
            Tesla cars Numbers ${teslaCount} And the tesla car ${numTesla} Is In the Room Number ${value}
            <br/>
            `;
            numTesla++;
        });
    }

}