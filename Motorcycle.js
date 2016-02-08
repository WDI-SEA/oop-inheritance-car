var Car = require('./Car.js');

//Implement your Motorcycle here

function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers)
	this.seats = 2;
	this.wheelie = function() {
		if(this.running) {
			console.log("doing a sick wheelie!");
			return true;
		} else{
			return false;
		}

	};
};

Motorcycle.prototype = new Car();

module.exports = Motorcycle;