// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Honda', 'Goldwing', 1996, 'Black', 2, ['Zach', 'Elise']);
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'myMotorcycle is not an instanceof MotorCycle');
assert.strictEqual(myMotorcycle instanceof Car, true, 'myMotorcycle is not an instance of Car');
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Goldwing', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1996, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color of truck.');
assert.strictEqual(myMotorcycle.seats, 2, 'Must default to 2 seats.');
assert.deepEqual(myMotorcycle.passengers, ['Zach', 'Elise'], 'Constructor did not set number of passengers.');
assert.strictEqual(myMotorcycle.running, false, 'Must be running in order to pull a sick wheelie');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Must be able to call wheelie function');
assert.strictEqual(Motorcycle.prototype.constructor, Motorcycle, 'Must be attached to the Motorcycle Prototype');
success();