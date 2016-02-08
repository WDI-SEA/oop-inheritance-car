var Car = require('./Car.js');

//Implement your Motorcycle here
// a Motorcycle must be an instance of
//Car and Motorcycle, cannot have more than
// 2 seats, can wheelie() only if running
//return true and console.log
function Motorcycle(make, model,year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.seats = 2;

};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcylce;
Motorcycle.prototype.wheelie = function () {
	if (this.running === true) {
		console.log("Doing a sick wheelie!");
		return true
	};
	else {
		return false; 
	}
}

module.exports = Motorcycle;