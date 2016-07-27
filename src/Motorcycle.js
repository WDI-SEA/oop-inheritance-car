var Car = require('./Car.js');

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Car;

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  cycleSeats = 2;
  Car.call(this, make, model, year, color, cycleSeats, passengers);
}

Motorcycle.prototype.wheelie = function(){
  if(this.running){
    console.log("doing a sweet wheelie");
    return true;
  }
  return false;
};


module.exports = Motorcycle;
