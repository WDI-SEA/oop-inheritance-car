var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	

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
	}
	return result;
};

module.exports = Motorcycle;