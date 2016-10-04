var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {

	// Car.call(make, model, year, color, seats, passengers);
	
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = seats;
	this.passengers = passengers;
}

// Truck.prototype = Object.create(Car.prototype);
// Truck.prototype.constructor = Truck.prototype;


module.exports = Truck;
