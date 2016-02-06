var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, capacity) {
	Car.call(this, make, model, year, color, 3);
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
	var takeLoad = false;
	if (pounds + this.cargo <= this.capacity) {
		this.cargo += pounds;
		takeLoad = true;
		console.log("loaded " + pounds + "lbs of cargo.");
	}
	return takeLoad;
}

Truck.prototype.unload = function(pounds) {
	var removeLoad = false;
	if (this.cargo - pounds >=0) {
		this.cargo -= pounds;
		removeLoad = true;
	}
	return removeLoad;
}

var myTruck = new Truck("Ford", "F150", "2010", "Red", 10);

module.exports = Truck;