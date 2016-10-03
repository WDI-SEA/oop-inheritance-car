// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test constructor
console.log('Testing Truck Constructor');

var myTruck = new Truck('Toyota', 'Tacoma', 1999, 'Blue', null, ['batman', 'yogi']);

assert.strictEqual(myTruck instanceof Truck, true, 'myTruck not instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'myTruck not instance of Car');
assert.strictEqual(myTruck.make, 'Toyota', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Tacoma', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Blue', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats to 3.');
assert.deepEqual(myTruck.passengers, ['batman', 'yogi'], 'Constructor did not set passengers.');
success();



