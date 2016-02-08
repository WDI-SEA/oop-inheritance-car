var Car = require('./Car.js');
//Implement your Truck here
function Truck(make, model, year, color, seats, capacity, cargo) {
	Car.call(this, make, model, year, color, seats);
	this.capacity = capacity || 0;
	this.weight = 0;
	this.cargo = this.weight;

	};
// load(pounds) should take a weight in pounds and increase the amount of cargo the truck is carrying IF loading the additional weight won't put it over capacity. Should console.log "loaded <pounds>lbs of cargo." and return true if successful and false if the cargo couldn't be loaded (over capacity)
var load = function(pounds) {
	if (pounds + weight < capacity) {
		pounds + weight;
		console.log("loaded " + pounds +"lbs of cargo");
		return true
	} else {
		return false
	}
};	


// unload(pounds) should take a weight in pounds and decrease the amount of cargo the truck is carrying and return true. However, if the amount of pounds is greater than the amount of cargo on the truck it should not reduce the cargo and should return false.
 


 // 	for ( i= 0; i < _______________; i--) {
 		
 // 		} else {
 // 			pounds > cargo;
 // 			return false
 // 		}
	// };


module.exports = Truck;