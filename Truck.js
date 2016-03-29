var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, seats, capacity) {
Car.call(this, make, model, year, color);

this.seats = 3;
this.capacity = capacity || 0;
this.cargo = 0;
};

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;


Truck.prototype.load = function(pounds) {
  if(this.cargo + pounds < this.capacity) { 
   this.cargo = this.cargo + pounds;
  console.log("loaded ", pounds, "of cargo");
  return true;
  } else {
    console.log("cargo is over capacity");
   return false;
}
}

Truck.prototype.unload = function(pounds) {
  if (pounds < this.cargo) {
    this.cargo - pounds;
    return true; 
  } else {
    return false;
  }
}

// Add an optional constructor parameter for capacity this is the 
// amount of weight in pounds the truck can carry. This should just 
// default to 0 if not provided. Also add an attribute for cargo, which 
// is the amount of weight the truck is CURRENTLY carrying. 
// This should default to 0, and no constructor parameter is required.

// Add 2 methods to the Truck prototype.

// load(pounds) should take a weight in pounds and increase the amount 
// of cargo the truck is carrying IF loading the additional weight won't 
// put it over capacity. Should console.log "loaded <pounds>lbs of cargo." and 
// return true if successful and false if the cargo couldn't be loaded (over capacity)
// unload(pounds) should take a weight in pounds and decrease the amount of cargo 
// the truck is carrying and return true. However, if the amount of pounds is greater 
// than the amount of cargo on the truck it should not reduce the cargo and should return false.









module.exports = Truck;