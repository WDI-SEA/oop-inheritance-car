var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, passengers);
  this.seats = 2;
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

module.exports = Motorcycle;
