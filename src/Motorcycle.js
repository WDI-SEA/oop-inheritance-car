var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, passengers);
  this.wheelie = function(){
    if(!Car.running){
      return false;
    } else {
      console.log("Doing a sick wheelie!!");
    }
  }
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;
module.exports = Motorcycle;
