var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this);
  this.seats = 2;

  function wheelie() {
    if (!this.running) {
      console.log("can't wheelie while off");
      return false;
    }
    else {
      console.log("Doing a sick wheelie!");
      return true;
    }
  }

}




//MotorCycle.prototype = Object.create(Car.prototype);


module.exports = Motorcycle;