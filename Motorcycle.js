var Car = require('./Car.js');

//Implement your Motorcycle here
// A Motorcycle...

// Must be an instanceof Motorcycle
// Must be an instanceof Car

// Cannot have more than 2 seats (constructor)
// Should be able to wheelie() but only if running. Return true and 
// console.log "Doing a sick wheelie!!" on success otherwise return false.
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);

};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.seatCount = function(seats){
  if (this.seats <= 2) {
    return true;
  }
};


Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log("Doing a sick wheelie!!");
    return true;
  } 
}

module.exports = Motorcycle;