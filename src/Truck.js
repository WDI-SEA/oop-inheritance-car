var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, passengers) {
  var seats = 3;
  // define seats to send to Car blueprint
  Car.call(this, make, model, year, color, seats, passengers);
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
