var Car = require('./Car.js');

//Implement your Truck here
function Truck(make, model, year, color, capacity) {
    Car.call(this, make, model, year, color, 3);
    this.capacity = capacity || 0;
    this.cargo = 0;
};
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.load = function(pounds) {
    if (this.cargo + pounds < this.capacity) {
        this.cargo += pounds;
        console.log("loaded", pounds, "lbs of cargo.");
        return true;
    }
    return false;
}

Truck.prototype.unload = function(pounds) {
    if (this.cargo >= pounds) {
        this.cargo -= pounds;
        console.log("unloaded", pounds, "lbs of cargo.");
        return true;
    }
    return false;
}


module.exports = Truck;