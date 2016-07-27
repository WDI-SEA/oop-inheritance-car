var Car = require('./Car.js');


// Implement your Truck here
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Car;

function Truck(make, model, year, color, seats, passengers) {
  truckSeats = seats || 3;
  Car.call(this, make, model, year, color, truckSeats, passengers);


}

module.exports = Truck;
