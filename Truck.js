var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, capacity, cargo) {
	this.make = make,
	this.model = model,
	this.year = year,
	this.color = color,
	this.seats = 3;
	this.capacity = 0;
	if(capacity){
		this.capacity = capacity;
	};
	this.cargo = 0;
	if(cargo){
		this.cargo = cargo;
	};
	
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck.prototype;

Truck.prototype.load = function(){

	if(this.cargo > 0 && this.cargo < this.capacity){
		console.log("loaded " + this.cargo + " pounds of cargo");
		return true;
	};
	console.log("Cargo could not be loaded, it is over capacity")
	return false;
};



Truck.prototype.unload = function(){
	if(this.cargo > 0 && this.cargo < this.capacity){
		var leftOver = this.capacity - this.cargo;
		console.log("Truck capacity: " + this.capacity);
		console.log("Truck cargo: " + this.cargo);
		console.log('Cargo was successfully unloaded, there is ' + leftOver + " pounds in the back of your truck");
		return true;
	} else{
		console.log('Cargo is over capacity');
		return false
	};
};


module.exports = Truck;