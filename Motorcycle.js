var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(model, year, color, seats, passengers) {
	Car.call(this, model, year, color, seats, passengers);
	this.seats = 2;
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.lessThan2seats = function() {
	if (this.seats > 2) {
		return false;
	} else {
		return true;
	}
};

Motorcycle.prototype.wheelie = function() {
	if(this.running) {
		return true;
		console.log("Doing a sick wheelie!!")
	} else {
		return false;
	}
};


//// LEAVE AT BOTTOM OF PAGE ////
module.exports = Motorcycle;