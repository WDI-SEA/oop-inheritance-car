var Car = require('./Car.js');

//Implement your Truck here

function Truck(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

var myTruck = new Truck ('RoadHog', 'Tonga', 2016, 'Red', 3);
myTruck instanceof Truck
myTruck instanceof Car

module.exports = Truck;