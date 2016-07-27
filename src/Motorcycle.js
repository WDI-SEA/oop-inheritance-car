var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, 2, passengers);
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Car.prototype.wheelie = function() {
  if (this.running === true) {
    console.log('Doing a sick wheelie!!');
    return true;
  } return false;
};

module.exports = Motorcycle;
