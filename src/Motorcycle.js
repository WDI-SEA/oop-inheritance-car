var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
  this.seats = seats || 2;
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Car;

module.exports = Motorcycle;
