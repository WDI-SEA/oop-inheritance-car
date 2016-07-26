var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.seats = 2;

	this.running = false;
}
Motorcycle.prototype.wheelie = function() {
  this.running = true;
};

module.exports = Motorcycle;
