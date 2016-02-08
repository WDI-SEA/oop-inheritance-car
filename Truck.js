var Car = require('./Car.js');

//Implement your Motorcycle here
function Truck(make, model, year, color, seats, passengers, capacity) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.capacity = capacity || 0;
	this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

var a = new Car("blue");
var s = new Truck("a", "b", "c", "d", "e", "f", "g");

s instanceof Car;
a instanceof Truck;

// Truck.prototype.capacity = function(capacity){
// 	this.capacity = capacity || 0;
// };


Truck.prototype.load = function(pounds) {
	if (pounds <= this.capacity) {
		this.cargo += pounds;
	return true ;
	} return false;
};

Truck.prototype.unload = function(pounds) {
	if (pounds <= this.cargo) {
		this.cargo -= pounds;
		return true;
	} return false;
};



module.exports = Truck;