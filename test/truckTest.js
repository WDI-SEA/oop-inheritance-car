// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// test constructor
console.log('Testing Constructor');
var myTruck = new Truck('Ford', 'f150', 1999, 'Red', 2);
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'f150', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 2, 'Constructor did not set seats.');

success('TRUCK TEST success');