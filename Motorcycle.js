var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats) {
	Car.call(this, make, model, year, color, seats);
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.maxSeats = function() {
	var result;
	if (this.seats > 2) {
		console.log('Sorry, motorcycles can only have two seats.');
		result = true;
	}
	else {
		result = false;
	}
	return result;
}

Motorcycle.prototype.wheelie = function() {
	var result;
	if (this.running) {
		result = true;
	}
	else {
		result = false;
	}
	return result;	
}

module.exports = Motorcycle;