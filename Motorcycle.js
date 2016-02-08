var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	if (this.seats <= 2) {
	Car.call(this, make, model, year, color, seats, passengers);
	} else {
		Car.call(this, make, model, year, color, 2, passengers);
	}
};

// Motorcycle.prototype.seats = function() {
// 	this.seats <= 2;
// }

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
	if (this.running) {
		return true;
	console.log("Doing a sick wheelie!!");
	} else {
		return false;
	}
};






module.exports = Motorcycle;