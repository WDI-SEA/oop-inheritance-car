var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers);
	if(this.seats > 2){
		this.seats = 2;
	}
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function(){
	var success = false;
	if(this.running){
		console.log("Doing a sick wheelie!!");
		var success = true;
	}
	return success;
}


module.exports = Motorcycle;

//instance of motorcycle


