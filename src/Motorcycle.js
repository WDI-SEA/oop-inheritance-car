var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers);
    if (!Motorcycle.seats){
    Motorcycle.seats = 2;
  }
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle; 

Motorcycle.prototype.wheelie = function(){
    if(Car.running){
      console.log("Doing a sick wheelie!!");
    } else {
      return false;
    }
}


module.exports = Motorcycle;
