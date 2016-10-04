var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers, running) {
	
	// Car.call(make, model, year, color, seats, passengers);

	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = 2;
	this.passengers = passengers;
	this.running = running;
}

// Motorcycle.prototype = Object.create(Car.prototype);
// Motorcycle.prototype.constructor = Motorcycle.prototype;

Motorcycle.prototype.wheelie = function() {
	if (this.running) {
		console.log("Doing a sick wheelie!");
	} else {
		return false;
	}
}

module.exports = Motorcycle;
