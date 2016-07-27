
var Car = require('./Car.js');

function Motorcycle(make, model, year, color, seats, passengers, running){
  Car.call(this, make, model, year, color, passengers);

  this.seats = seats || 2;
  this.running = false;  
}

//create relationship
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function(){
  if(this.running){
    console.log("Doing a sick wheelie!!");
    return true;
  }
  return false;
}

Motorcycle.prototype.start = function() {
  this.running = true;
};

module.exports = Motorcycle;
