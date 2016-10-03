var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	this.seats = 2;
	running = false;
}

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;


Motorcycle.prototype.wheelie = function() {
	if (this.running) {
		console.log('Doing a sick wheelie!!');
		return true;
	}
	else {
		return false;
	}
}




module.exports = Motorcycle;




// Your Motorcycle constructor should meet the following requirements. There should be at least one test for each bullet point below.

// Must be an instance of a Motorcycle
// Must be an instance of a Car
// Must have the following parameters
// make
// model
// year
// color
// passengers
// Must default to 2 seats
// Must be able to do a wheelie by calling wheelie(), but only if running.
// If the wheelie is successful, return true and console.log the following: "Doing a sick wheelie!!". Otherwise return false.
// This function should be attached to Motorcycle.prototype.