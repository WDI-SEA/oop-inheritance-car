var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
	Car.call(this, make, model, year, color, passengers);
	this.seats = 2;
	this.passengers = passengers || this.passengers;
}

Motorcycle.prototype.wheelie = function() {
	if (this.running) {
		console.log("Doing a sick wheelie!!");
		return true;
	}

	return false;
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.constructor = Motorcycle;

var myMotorcycle = new Motorcycle();
console.log(myMotorcycle.running);

module.exports = Motorcycle;
