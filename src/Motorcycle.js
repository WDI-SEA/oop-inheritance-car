var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers); 
	seats = 2;
	this.running = false;
}
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;


// start and off functions
Motorcycle.prototype.start = function() {
  this.running = true;
};

Motorcycle.prototype.off = function() {
  this.running = false;
};


// wheelie function
Motorcycle.prototype.wheelie = function(){
	if (this.running) {
		console.log('doing a sick wheelie!!!');
		return true;
	}
	return false;
};




module.exports = Motorcycle;
