var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, capacity) {
	Car.call(this);
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = 3;
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
	var load = this.cargo + pounds;
	var result = false;
	if(this.capacity > load) {
		console.log("Loaded "+pounds+" pounds!");
		this.cargo = load;
		result = true;
	} 
	return result;
};

Truck.prototype.unload = function(pounds) {
	var load = this.cargo - pounds;
	var result = false;
	if(load > 0) {
		console.log("Unloaded "+pounds+" pounds!");
		this.cargo = load;
		result = true;
	}
	return result;
};
module.exports = Truck;