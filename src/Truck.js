var Car = require('./Car.js');

// Implement your Truck here

//Truck Object Construction
function Truck(make, model, year, color, passengers) {
	Car.call(this, make, model, year, color, passengers);
	this.seats = seats || 3;
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;



module.exports = Truck;
