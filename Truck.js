var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, capacity) {
	Car.call(this, make, model, year, color);
	this.seats = 3;
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
	var result;
	this.cargo = this.cargo + pounds;
	if (this.cargo < this.capacity) {
		console.log('loaded ' + pounds + 'lbs of cargo');
		result = true;
	}
	else {
		result = false;
	}
	return result;
}

Truck.prototype.unload = function(pounds) {
	var result;
	if (this.cargo >= pounds) {
		this.cargo = this.cargo - pounds
		result = true;
	}
	else {
		result = false;
	}
	return result;
}

module.exports = Truck;