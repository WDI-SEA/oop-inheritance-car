var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(seats, running) {
	Car.call(this, seats, running);
	this.seats = seats;
	this.running = false;
};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle.prototype;

Motorcycle.prototype.Wheelie = function(){

	if(this.running == true){
		console.log('Doing a sick wheelie!!');
		return true;
	}
	return false;

};

module.exports = Motorcycle;