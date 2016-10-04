var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, passengers) {
	Car.call(this, make, model, year, color, passengers);
	this.seats = 2;
	this.running = true;
}



Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;


Motorcycle.prototype.wheelie = function() {
  if (this.running) {
    console.log("Doing a sick wheelie!!");
    return true;
  	}
  	return false;
};





module.exports = Motorcycle;
