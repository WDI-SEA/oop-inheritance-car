var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, cargoInPounds, passengers) {
  Car.call(this, make, model, year, color, 3, passengers);
  this.cargoInPounds = cargoInPounds;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
