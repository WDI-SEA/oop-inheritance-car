var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  if (!seats) {
    this.seats = 2;
  }
  Car.call(this, make, model, year, color, seats, passengers)
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log("Doing a sick wheelie!!");
    return true;
  }else{
    return false;
  }

};

module.exports = Motorcycle;
