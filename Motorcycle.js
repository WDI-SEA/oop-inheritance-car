var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats) {
	if (seats<=2){
	Car.call(this, make, model, year, color, seats);
	}
	else Car.call(this, make, model, year, color, 1);


};

Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Car;
Motorcycle.prototype.wheelie = function(){
	if (this.running) {
		console.log("Doing a sick wheelie!!");
		return true;
	}
	else return false;
}

module.exports = Motorcycle;