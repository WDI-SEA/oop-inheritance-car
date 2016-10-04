// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Truck Constructor');

var myTruck = new Truck('Ford', 'F-150', 2016, 'Black')
assert.strictEqual(myTruck instanceof Car, true, "Not an instance of Car");
assert.strictEqual(myTruck instanceof Truck, true, "Not an instance of Truck");
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'F-150', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
success('Your Truck is Ready. Now move on to Motorcycle.');
