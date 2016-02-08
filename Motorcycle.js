var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {

	this.seats = 2;
	this.wheelie = function (){
		var result = false;
		if (this.running){
			console.log("Doing a sick wheelie!!");
			result = true;
		}
		return result;
	};
	if (seats <= 2){
		Car.call(make, model, year, color, seats, passengers);
	} else {
		Car.call(make, model, year, color, 2, passengers);
	}

};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

// var motorcycle = new Motorcycle ("Ducati", 600, 2015, "blue", 2);
// console.log(motorcycle);

module.exports = Motorcycle;