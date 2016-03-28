var Car = require('./Car.js');

//Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
    Car.call(this, make, model, year, color, seats, passengers);
    
    if (this.seats > 2) {
        console.log("Too many seats.  Your motorcyle will now have two seats whether you wanted or not.");
        this.seats = 2;
    }
};
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.wheelie = function() {
    if (this.running) {
        console.log("Doing a sick wheelie!");
        return true;
    }
    return false;
}

module.exports = Motorcycle;