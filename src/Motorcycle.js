var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, passengers);
}

MotorCycle.prototype = Object.create(Car.prototype);
MotorCycle.prototype.constructor = MotorCycle;
module.exports = Motorcycle;
