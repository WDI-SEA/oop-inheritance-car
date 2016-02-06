var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle() {
	Car.call(this);
	this.seats = 2;
};
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
	if(this.running) {
		console.log("Doing a sick wheelie!");
		return true;
	} else {
		return false;
	}
}

module.exports = Motorcycle;