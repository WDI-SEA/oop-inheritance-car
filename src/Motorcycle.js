var Car = require('./Car.js');

// new constructor & parameters
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, 2, passengers);
}

//constructor inherits Car
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function(){
  if(this.running === true){
    console.log("Doing a sick wheelie!!");
    return true;
  }
  return false;
}

//declare instances
// var motorcycle = new Motorcycle();
// var car = new Car();

module.exports = Motorcycle;
