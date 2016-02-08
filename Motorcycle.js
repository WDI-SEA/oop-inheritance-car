var Car = require('./Car.js');

// call motorcycle from car
function Motorcycle(make, model, year, color, seats, passengers){
	Car.call(this, make, model, year, color, seats, passengers);
	if (this.seats > 2) {
		console.log("Motorcycles cannot have more than two seats!")
		return false
	} else {
		return true;
	}
};
// create Motorcycle
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;
Motorcycle.prototype.wheelie = function(){
	if (this.running){
		return true;
		console.log("Doing a sick wheelie!!");
	} else
	return false;
}

var triumph = new Motorcycle("Triumph", "675R", "2014", "White", 1);

module.exports = Motorcycle;