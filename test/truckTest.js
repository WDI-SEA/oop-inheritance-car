// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Constructor');
var myTruck = new Truck('Chevy', 'Silverado', 2013, 'Red', 4);
assert.strictEqual(myTruck.make, 'Chevy', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Silverado', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2013, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 4, 'Constructor did not set seats.');
success();
