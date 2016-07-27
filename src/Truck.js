var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
  if (!Truck.seats){
    Truck.seats = 3;
  }
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
module.exports = Truck;
// Student.prototype.constructor = Student;