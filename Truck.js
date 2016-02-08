var Car = require('./Car.js');

//Implement your Truck here

function Truck(make, model, year, color, seats, capacity, cargo) {
	Car.call(this, make, model, year, color);
	this.seats = 3;
	this.capacity = capacity || 0;
	this.cargo = cargo || 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
	this.cargo = pounds;
	if (this.cargo < this.capacity) {
		return true;
		pounds++;
	} else {
		return false;
	}
}



module.exports = Truck;