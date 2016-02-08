var Car = require('./Car.js');

//Implement your Motorcycle here

// Part 1

function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.seats <= 2;
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
	var result = false;
	if (!this.running) {
		result = true;
		console.log("Doing a stick wheelie!");
	}
	return result;
}

module.exports = Motorcycle;








	// Car.call(this, seats);
	// Car.call(this, running);
	// this.seats <= 2
	// this.wheelie = true;

	// var result = false;
	// if (!this.running) {
	// 	result = true;
	// 	console.log("Doing a stick wheelie!!")
	// }
	// return result;