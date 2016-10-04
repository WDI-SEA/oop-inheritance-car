// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here


var myTruck = new Truck("Chevy", "Colorado", 2016, "Red", 3);

assert.deepEqual(myTruck instanceof Car, true, "Truck is not an instance of Car");
assert.strictEqual(myTruck instanceof Truck, true, "Truck is not an instance of Truck");

assert.strictEqual(myTruck.make, 'Chevy', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Colorado', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
success();











