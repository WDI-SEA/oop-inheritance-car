var Car = require('./Car.js');

// Implement your Truck here
// class Truck extends Car {
//   constructor(make, model, year, color, passengers, seats){
//     super(make, model, year, color, passengers, seats)
//   }
// }

function Truck(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, null, passengers);
  this.seats = seats || 3;
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;


module.exports = Truck;
