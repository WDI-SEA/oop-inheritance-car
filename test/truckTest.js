// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// test constructor
console.log('Testing Constructor');
var myTruck = new Truck('Acura', 'Integra', 1999, 'Red', 4);
assert.strictEqual(myTruck instanceof Truck, true, 'myTruck is not an instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Integra', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
success();