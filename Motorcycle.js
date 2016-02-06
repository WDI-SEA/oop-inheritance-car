var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
	Car.call(this, make, model, year, color, 2, passengers);
	this.wheelie = function() {
		var popWheelie = false;
		if (this.running) {
			popWheelie = true;
			console.log("Doing a sick wheelie!!");
		}
		return popWheelie;
	}
};
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var harley = new Motorcycle("Harley", "CoolModel", "2016", "red", 1);

module.exports = Motorcycle;