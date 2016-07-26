// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
var myTruck = new Truck('Ford', 'F-150', 1999, 'Primer', 3, ['Billy-Bob', 'Jenny-Lou']);
console.log('Testing make on truck');
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
success();
console.log('Testing model on truck');
assert.strictEqual(myTruck.model, 'F-150', 'Constructor did not set model.');
success();
console.log('Testing testing year on truck');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
success();
console.log('Testing testing color on truck');
assert.strictEqual(myTruck.color, 'Primer', 'Constructor did not set color.');
success();
console.log('Testing testing seats on truck');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
success();
console.log('Testing testing passengers of truck');
assert.deepEqual(myTruck.passengers, ['Billy-Bob', 'Jenny-Lou'], 'Constructor did not set passengers.');
success('Truck is ready.');