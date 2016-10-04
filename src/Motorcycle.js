var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make,model,year,color,seats,passenger) {
	Car.call(this,make,model,year,color,seats,passenger);
	this.seats = seats || 2;
}

Motorcycle.prototype = Object.create(Car.prototype)
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function(){
	if(this.running){
		console.log("Sick Wheelie Bro");
		return true;
	}
	return false;
}

module.exports = Motorcycle;
