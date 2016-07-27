var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {
  if (!seats) {
    this.seats = 3;
  }
  Car.call(this, make, model, year, color, seats, passengers)
}
module.exports = Truck;

