var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {
  Car.call(this);
  this.seats = 3;
}

module.exports = Truck;