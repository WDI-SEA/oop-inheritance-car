// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log("testing Motorcycle constructor");
var myMotorcycle = new Motorcycle("Honda", "e500", 1999, "black");
assert.strictEqual(myMotorcycle instanceof Car, true, "myMotorcycle is not an instance of Car");
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, "myMotorcycle is not an instance of Motorcycle");
assert.strictEqual(myMotorcycle.make, "Honda", "constructor did not set make");
assert.strictEqual(myMotorcycle.model, "e500", "constructor did not set model");
assert.strictEqual(myMotorcycle.year, 1999, "constructor did not set year");
assert.strictEqual(myMotorcycle.color, "black", "constructor did not set color");
assert.deepEqual(myMotorcycle.passengers, [], "constructor did not set passengers");
var myMotorcycle = new Motorcycle("Honda", "e500", 1999, "black", ['Jack', 'Jill']);
assert.deepEqual(myMotorcycle.passengers, ['Jack', 'Jill'], "constructor did not set passengers");
assert.strictEqual(myMotorcycle.seats, 2, "constructor did not default to 2 seats");
success("Well done! You finished testing the constructor.");


// Test wheelie
console.log("testing doing a wheelie");
assert.equal(typeof(myMotorcycle.running), "boolean", "There is not a running property on myMotorcycle.");
assert.equal(typeof(myMotorcycle.wheelie), "function", "There is no a wheelie function on myMotorcycle.");
assert.strictEqual(myMotorcycle.wheelie(), false, "There is no a wheelie function on myMotorcycle.");
myMotorcycle.running = true;
assert.strictEqual(myMotorcycle.wheelie(), true, "There is no a wheelie function on myMotorcycle.");
assert.ok(Motorcycle.prototype.wheelie, "The wheelie function is not on the Motorcycle prototype");
success("Well done! You finished phase 2! Testing complete.");

