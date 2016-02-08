var Car = require('./Car.js');
var Car = require('./Motorcycle.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, capacity) {
	Car.call(this, make, model, year, color, seats);
	this.seats = 3;
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
//console.log('Truck is ' + Truck);

//add cargo function
Truck.prototype.load = function(pounds) {	
	if (this.capacity > (this.cargo + pounds)) {
	this.cargo = this.cargo + pounds;
	return true;
	} else {
		return false;
	}
};

//unload function
Truck.prototype.unload = function(pounds) {
	if (pounds < this.cargo) {
		this.cargo = this.cargo-pounds;
		return true;
	} else {
		return false;
	}	
};

module.exports = Truck;
//module.exports = Motorcycle;