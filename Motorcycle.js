var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var a = new Car("blue");
var s = new Motorcycle("a", "b", "c", "d", "e", "f");

s instanceof Car;
a instanceof Motorcycle;

module.exports = Motorcycle;

