var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
}
Motorcycle.prototype.start = function() {
  this.start = true;
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log('Doing a wheelie that is sick');
  } else {
    console.log('You should be running');
  }
};


module.exports = Motorcycle;
