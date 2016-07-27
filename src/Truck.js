var Car = require('./Car.js');

function Truck(make, model, year, color, seats, passengers){
  Car.call(this, make, model, year, color, passengers);
    this.seats = seats || 3;
 }

//create relationship
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
