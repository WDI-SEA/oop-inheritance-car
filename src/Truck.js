var Car = require('./Car.js');

function Truck(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
  this.seats = seats || 3;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Car; 

module.exports = Truck;
