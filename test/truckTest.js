// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Ford', 'Ranger', 2010, 'Gray');
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Ranger', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2010, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Gray', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
console.log("Checking if myTruck is an instance of Truck.")
assert.strictEqual(myTruck instanceof Truck, true, 'myTruck is not an instance of Truck');
console.log("Checking if myTruck is an instance of Car.")
assert.strictEqual(myTruck instanceof Car, true, 'myTruck is not an instance of Car');
success("DAAAAAAAMMMMNNN DANIEL!!! Thats a nice truck!");