var Car = require('./Car.js');

//Implement your Motorcycle here

// Just a heads up, the HW description was a bit misleading. When you test using `instanceof`, you’ll want to make sure that an `instance` is on the left side, and the `Motorcycle` constructor on the right
function Motorcycle(make, model, year, color, seats, passengers) {
	Car.call(this, make, model, year, color, seats, passengers)
	 //needs a conditional aka if statment:
	 if (this.seats >= 3){
	 	this.seats = 2;
	 };
	 this.wheelie = function(){
	 	if (this.running == true) {
	 		console.log("Doing a sick wheelie");
	 		return true
	 	} else {
	 		return false
	 	}
	 }
};

module.exports = Motorcycle;

//go look for coffee constructor example from class
