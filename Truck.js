var Car = require('./Car.js');

//Implement your Truck here
function Truck(make,model,year,color,capacity) {
	Car.call(this, make, model, year, color);
	this.seats = 3;
	this.cargo = 0;
	this.capacity = capacity || 0 ;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function (pounds) {
	var newWeight = this.cargo + pounds;
	if (this.capacity >= newWeight) {
		console.log ("Loaded " + pounds + " lbs of cargo.");
		this.cargo = newWeight;
		return true;
	}
	if (this.capacity < newWeight) {
		return false;
	}
}

Truck.prototype.unload = function (pounds) {
	var newWeight = this.cargo - pounds;
	if (this.capacity > newWeight) {
		this.cargo = newWeight;
		return true;
	};

	if (this.capacity < newWeight) {
		return false;
	}
}


module.exports = Truck;