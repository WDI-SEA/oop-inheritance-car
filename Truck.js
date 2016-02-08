var Car = require('./Car.js');

function Truck(make, model, year, color, capacity, cargo) {
	Car.call(this, model, year, color, 3 , 0);
	this.make = make;
	this.capacity = capacity || 0; // Amount of weight truck can carry
	this.cargo = cargo || 0; // Amount of weight truck is currently carrying
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
	if((this.cargo + pounds) < this.capacity) {
		console.log("loaded " + pounds + " lbs of cargo.");
		this.cargo = this.cargo + pounds;
		return true;
	} else {
		return false;
	}
};

Truck.prototype.unload = function(pounds) {
	if (pounds <= this.cargo) {
		this.cargo = this.cargo - pounds;
		return true;
	} else {
		return false;
	}
};

//// LEAVE AT BOTTOM OF PAGE ////
module.exports = Truck;