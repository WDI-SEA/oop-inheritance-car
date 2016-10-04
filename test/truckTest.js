// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

//check for the proper constructor parameters
console.log('Testing Constructor');
var myTruck = new Truck('Toyota', 'Tundra', 2013, 'Metallic', undefined, ["Sally Joe"]);
assert.strictEqual(myTruck.make, 'Toyota', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Tundra', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2013, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Metallic', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');

//check that it is an instance of truck.
//check that it is an instance of car.
assert.strictEqual(myTruck instanceof Truck, true, 'Is not an instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Is not an instance of Car');

success();