// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

//test constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Toyota', 'Tacoma', 2001, 'Red', 3, ['Sam', 'Cindy']);
assert.strictEqual(myTruck instanceof Truck, true, 'myTruck is not an instanceof Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Truck is not an instance of Car');
assert.strictEqual(myTruck.make, 'Toyota', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Tacoma', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2001, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color of truck.');
assert.strictEqual(myTruck.seats, 3, 'Must default to 3 seats.');
assert.deepEqual(myTruck.passengers, ['Sam', 'Cindy'], 'Constructor did not set number of passengers.');
success();