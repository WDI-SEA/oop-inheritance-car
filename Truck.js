var Car = require('./Car.js');

//Implement your Truck here

function Truck(make, model, year, color, seats, passengers, capacity, cargo) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.cargo = cargo || 0;

};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

var myTruck = new Truck ('RoadHog', 'Tonga', 2016, 'Red', 3);
myTruck instanceof Truck
myTruck instanceof Car

module.exports = Truck;

Truck.prototype.capacity = function(capacity){
	this.capacity = capacity || 0;
	this.tempCapacity = this.capacity;
	console.log('capacity is '+this.capacity);
};

Truck.prototype.load = function(cargo){
	this.cargo = cargo;
	var result = false;
	if (this.cargo <= this.capacity){
		this.tempCapacity = this.tempCapacity - this.cargo;
	}
	return result;
};	

Truck.prototype.unload = function(cargo){
	var result = false;
	if (this.cargo <= (this.capacity - this.tempCapacity)){
		result = true;
		
	}
	return result
};