var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, null, passengers);
  this.seats = seats || 2;
}
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
  if(this.running) {
    console.log("Doing a sick Wheelie!!");
    return true;
  }
  return false;
}

module.exports = Motorcycle;
