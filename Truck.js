var Car = require('./Car.js');



//Implement your Truck here
function Truck(make, model, year, color, seats, passengers, capacity) {
	var cargo = 0
	Car.call(this, make, model, year, color, seats, passengers)
	this.capacity = capacity || 0;
	this.seats = 3;
	this.load = function(pounds) {
		if(cargo + pounds <= this.capacity) {
			cargo = cargo + pounds;
			console.log("loaded "+ pounds +" lbs of cargo");
			return true;
		} else {
			return false;
		}
	};
	this.unload = function(pounds) {
		if(cargo - pounds >= 0){
			cargo = cargo - pounds;
			return true;
		} else {
			return false;
		}
	};
};









Truck.prototype = new Car();
module.exports = Truck;