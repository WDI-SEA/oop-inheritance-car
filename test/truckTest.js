// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Ford', 'F-150', 2002, 'Red', 4);
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'F-150', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2002, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 4, 'Constructor did not set seats.');
assert.strictEqual(Car.prototype.isPrototypeOf(myTruck), true, 'myTruck is not an instance of Car');
assert.strictEqual(Truck.prototype.isPrototypeOf(myTruck), true, 'myTruck is not an instance of Truck');
success();