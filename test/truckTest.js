// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// test constructor with passengers
console.log('Testing Truck');
var myTruck = new Truck('Dodge', 'Ram', 1999, 'Blue', 4);
assert.strictEqual(myTruck.make, 'Dodge', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Ram', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Blue', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
success();
