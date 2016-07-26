// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Honda', 'Goldwing', 1996, 'Black', 2, ['Zach', 'Elise']);
assert.strictEqual(myMotorcycle instanceof MotorCycle, true, 'myMotorcycle is not an instanceof MotorCycle');
assert.strictEqual(myMotorcycle instanceof Car, true, 'myMotorcycle is not an instance of Car');
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Goldwing', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1996, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color of truck.');
assert.deepEqual(myMotorcycle.passengers, ['Zach', 'Elise'], 'Constructor did not set number of passengers.');
assert.strictEqual(myMotorcycle.seats, 2, 'Must default to 2 seats.');
assert.strictEqual(Car.running(), true, 'Must be running in order to pull of a sick wheelie');
assert.strictEqual(myMotorcycle.wheelie();, true, 'Must be able to call wheelie function');
assert.strictEqual(module.exports, Motorcycle, 'Must be attached to the Motorcycle Prototype');
success();