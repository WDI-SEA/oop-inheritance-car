// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// /////// TEST PHASE ONE //////////////

// test constructor
console.log("testing Truck constructor");
var myTruck = new Truck("Honda", "Truck-O-Matic", 1974, "orange");
assert.strictEqual(myTruck instanceof Truck, true, 'myTruck is not an instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'myTruck is not an instance of Car');
assert.strictEqual(myTruck.make, "Honda", "constructor did not set make");
assert.strictEqual(myTruck.model, "Truck-O-Matic", "constructor did not set model");
assert.strictEqual(myTruck.year, 1974, "constructor did not set year");
assert.strictEqual(myTruck.color, "orange", "constructor did not set color");
assert.strictEqual(myTruck.seats, 3, "constructor did not default seats to 3");
assert.deepEqual(myTruck.passengers, [], "constructor did not set passengers");
var myTruck = new Truck("Honda", "Truck-O-Matic", 1974, "orange", ['Jen', 'Fred']);
assert.deepEqual(myTruck.passengers, ['Jen', 'Fred'], "constructor did not set passengers, exepected ['Jen', 'Fred']");
success("Well done! You finished phase 1! Move on to phase 2.");

// 