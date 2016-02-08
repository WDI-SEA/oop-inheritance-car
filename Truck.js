var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, capacity) {
	Car.call(this, make, model, year, color, seats);
	this.capacity = capacity || 0;
	this.cargo = 0;
	this.seat = 3;
	
	
};
// Create Truck
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;
// Load Truck
Truck.prototype.load = function(pounds) {
	var loaded = false;
	if (pounds + this.cargo <= this.capacity){
		this.cargo += pounds;
		loaded = true;
		console.log("Loaded " + pounds + " pounds of cargo.");
	}
	return loaded;
};
// Unload Truck
Truck.prototype.unload = function(pounds){
	var unload = false;
	if (this.cargo - pounds >= 0){
		this.cargo -= pounds;
		unload = true;
	}
	return unload;
}
// Create Ford Raptor
var raptor = new Truck("Ford", "Raptor", "2017", "Blue", 3, 1000)
module.exports = Truck;