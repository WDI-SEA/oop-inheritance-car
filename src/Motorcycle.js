var Car = require('./Car.js');

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Car;

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  cycleSeats = 2;
  Car.call(this, make, model, year, color, cycleSeats, passengers);
}

function Motorcycle.prototype.wheelie(){

}

module.exports = Motorcycle;
