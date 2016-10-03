// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

//constructor tests

console.log('Testing Motorcycle Constructor');

var myMotorcycle = new Motorcycle('Harley', 'Roadster', 1903, 'Black', null, ['batman', 'yogi']);

assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'myMotorcycle not instance of Car');
assert.strictEqual(myMotorcycle instanceof Car, true, 'myMotorcycle not instance of Car');
assert.strictEqual(myMotorcycle.make, 'Harley', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Roadster', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1903, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats to 3.');
assert.deepEqual(myMotorcycle.passengers, ['batman', 'yogi'], 'Constructor did not set passengers.');
success();


// test Wheelie

console.log('Testing the wheelie');
assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function');
myMotorcycle.off();
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycle allowed to do wheelie while not running.');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle not allowed to do wheelie while running.');
success();
