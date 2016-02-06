var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, passengers, capacity) {
	Car.call(this, make, model, year, color, seats, passengers)
	if(this.seats != 3){
		this.seats = 3;
	}
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(weight){
	var success = false;
	if(weight <= this.capacity){
		this.cargo += weight;
		success = true;
		console.log("loaded " + weight + " pounds of cargo.");
	}
	return success;
}

Truck.prototype.unload = function(weight){
	var success = false;
	if(weight <= this.cargo){
		this.cargo -= weight;
		success = true;
		console.log("unloaded " + weight + " pounds of cargo")
	}else if(weight > this.cargo){
		console.log("weight to unload exceeded cargo")
	}
	return success;
}


module.exports = Truck;