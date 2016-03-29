// ##Part 1 -- Motorcycles

// Create a new constructor called `Motorcycle` that extends your `Car` constructor.

// This should be done in the file called `Motorcycle.js` which requires `Car.js` to function.
// Additionally your `test.js` will need to require `Motorcycle.js` (already done for you).

// A `Motorcycle`...

// * Must be an instanceof `Motorcycle`
// * Must be an instanceof `Car`
// * Cannot have more than 2 seats (constructor)
// * Should be able to `wheelie()` but only if running. Return true and console.log `"Doing a sick wheelie!!"` 
// on success otherwise return false.


var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats) {
  Car.call(this, make, model, year, color, seats);
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.motoroom = function(seats){
  if (this.seats <= 2){
    return true;
  }
}

Motorcycle.prototype.wheelie = function(){
  if (this.running){
  console.log('Doing a sick wheelie!!');
    return true;
  }  
}


module.exports = Motorcycle;

