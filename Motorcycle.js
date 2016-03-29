var Car = require('./Car.js');

// //Implement your Motorcycle here
// * Must be an instanceof `Motorcycle`
// * Must be an instanceof `Car`
function Motorcycle(make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers, running, owner, previous owners)
  // * Cannot have more than 2 seats (constructor)
  if (this.seats > 2) {
  console.log("Have you ever seen a motorcycle that had more than two seats?")
  return (this.seats = 2)
}
Motorcycle.prototype = Object.create(Car.prototype);
Motorcycle.prototype.constructor = Motorcycle;
// * Should be able to `wheelie()` but only if running.
Motorcycle.prototype.start = function() {
  this.running = true;
}
//  Return true and console.log `"Doing a sick wheelie!!"` on success otherwise return false.
Motorcycle.prototype.wheelie = function() {
  if this.running = true;
  console.log('"Doing a sick wheelie!!"')
  else return false;
}
Motorcycle.prototype.off = function() {
  this.running = false;
}

module.exports = Motorcycle;