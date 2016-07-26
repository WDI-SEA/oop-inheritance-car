var Car = require('./Car.js');

// Implement your Truck here
function Truck() {
  Car.call(this, seats);
  this.seats = seats || 3;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Car; 

module.exports = Truck;
