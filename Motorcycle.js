var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	if (this.seats > 2){
		this.seats = 2;
	}

};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var myMotorcycle = new Motorcycle ('BMW', 'ZOOM', 2016, 'Red', 2);
myMotorcycle instanceof Motorcycle
myMotorcycle instanceof Car

Motorcycle.prototype.wheelie = function(){
	var result = false;
	if (this.running) {
		result = true;
		console.log("Doing a sick wheelie!")
	}
	return result;
};

module.exports = Motorcycle;