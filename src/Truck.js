var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {
   Car.call(this, make, model, year, color, seats, passengers);
 }
 
 Truck.prototype = Object.create(Car.prototype);
 Truck.prototype.constructor = Truck;

module.exports = Truck;
