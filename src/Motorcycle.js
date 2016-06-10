var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
}

Motorcycle.prototype.start = function() {
  this.running = true;
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log('doing a really sick sick wheelie');
  } else {
    console.log('car much be running');
  }
};

module.exports = Motorcycle;
