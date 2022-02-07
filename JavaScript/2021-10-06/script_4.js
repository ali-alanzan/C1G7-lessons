// Data Types

// Object
var car = {
    name: 'BMW',
    model: 'x6',
    price: 200000,
    open_ceil: true,
    features: [
        'stero',
        'night light'
    ],
    owner: {
        name: 'Wadah',
        license: ['owner', 'driver']
    }
};

car.name = 'Merceds';

// console.log( car.features, typeof(car.features) ); // first index in the features array 

// console.log( car.owner.name, typeof(car.owner.name) );


// Reference to the address of the car object 
var anotherCar = car;
anotherCar.name = 'Toyota';
console.log(car, car.name);



// create new array and add to it the array we want to copy
// merge
var copiedCar = { ...car, newKey: 'Test' };
copiedCar.name = 'Tesla';

console.log(car, copiedCar);



console.log( Object.keys(car).length );
