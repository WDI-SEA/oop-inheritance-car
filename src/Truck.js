var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, passengers) {
	Car.call(this, make, model, year, color, passengers);
	this.seats = 3;
	this.passengers = passengers || this.passengers;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

console.log(Truck);

module.exports = Truck;
