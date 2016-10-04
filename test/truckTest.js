// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log("Testing truck constructor")

var myTruck = new Truck('Toyota', 'Tundra', 2012, 'Silver', 6);

assert.strictEqual(myTruck instanceof Car, true, "Not an instance of a car");
assert.strictEqual(myTruck instanceof Truck, true, "Not an instance of a truck");
assert.strictEqual(myTruck.make, 'Toyota', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Tundra', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2012, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Silver', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 6, 'Constructor did not set seats.');
success('Truck good');