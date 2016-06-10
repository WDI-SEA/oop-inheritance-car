var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, 2, passengers);
}

Car.prototype.wheelie = function() {
  if (this.running) {
    console.log('Doing a sick wheelie!!');
    return true;
  }
  return false;
};


Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

module.exports = Motorcycle;
