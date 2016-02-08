var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, capacity) {
	this.capacity = capacity || 0;
	this.cargo = 0;
	this.load = function(pounds){
		var result = false;
		if ((this.cargo + pounds)<= capacity){
			this.cargo += pounds;
			result = true;
			console.log("loaded " + pounds + " lbs of cargo");
		} 
		return result;
	}

	this.unload = function(pounds){
		var result = false;
		if ((this.cargo - pounds) >= 0){
			this.cargo -= pounds;
			result = true;
		} 
		return result;

	}

	if (this.seats !== undefined){
		Car.call(make, model, year, color, seats);
	} else {
		Car.call(make, model, year, color, 3);
	}
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;


// var truck2 = new Truck("Ford", "F-150", 2015, "blue");
// console.log(truck2);

module.exports = Truck;