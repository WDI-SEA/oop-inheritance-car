var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) { //this needs to be consistent with order of Car declarations
  //constructor parameters- since they are already constructed in Car, call them in
  Car.call(this, make, model, year, color, 3, passengers);
}

//Truck inherits from Car
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

//Instance of truck and car
var truck = new Truck();
var car = new Car();

module.exports = Truck;


