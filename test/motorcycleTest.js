// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

var myMotorcycle = new Motorcycle("Triumph", "Bonneville", 2016, "Black", 2);

assert.deepEqual(myMotorcycle instanceof Car, true, "Motorcycle is not an instance of Car");
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, "Motorcycle is not an instance of Motorcycle");

assert.strictEqual(myMotorcycle.make, 'Triumph', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Bonneville', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Cannot wheelie while bike is off.');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Doing a sick wheelie.');

success();
