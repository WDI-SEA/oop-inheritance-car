var Car = require('./Car.js');
var Car = require('./Motorcycle.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, passengers, capacity, cargo) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.seats = 3;
	this.capacity = 0;
	this.cargo = 0;
};

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	if (this.seats <= 2) {
	Car.call(this, make, model, year, color, seats, passengers);
	} else {
		Car.call(this, make, model, year, color, 2, passengers);
	}
};



Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

// Motorcycle.prototype = Object.create(Car.prototype);
// Motorcycle.prototype.constructor = Motorcycle;

Truck.prototype = Object.create(Motorcycle.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
module.exports = Motorcycle;