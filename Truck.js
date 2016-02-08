var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, capacity) {
	Car.call(this, make, model, year, color, 3);
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Car;
Truck.prototype.load = function(toLoad){
	var diff = this.capacity - this.cargo;
	if (toLoad<=diff){
		this.cargo = this.cargo+toLoad;
		console.log("loaded "+toLoad+" lbs of cargo.");
		return true;
	}
	else return false;
}

Truck.prototype.unload = function(toUnload){
	if (toUnload<=this.cargo){
		this.cargo = this.cargo-toUnload;
		console.log("unloaded "+toUnload+" lbs of cargo");
		return true;
	}
	else return false;
}

module.exports = Truck;