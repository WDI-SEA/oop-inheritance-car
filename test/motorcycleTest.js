// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');
var myMotorCycle = new MotorCycle('Honda', 'Goldwing', 1996, 'Black', 2, ['Zach', 'Elise']);
assert.strictEqual(myMotorCycle instanceof MotorCycle, true, 'myMotorCycle is not an instanceof MotorCycle');
assert.strictEqual(myMotorCycle instanceof Car, true, 'myMotorCycle is not an instance of Car');
assert.strictEqual(myMotorCycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorCycle.model, 'Goldwing', 'Constructor did not set model.');
assert.strictEqual(myMotorCycle.year, 1996, 'Constructor did not set year.');
assert.strictEqual(myMotorCycle.color, 'Black', 'Constructor did not set color of truck.');
assert.deepEqual(myMotorCycle.passengers, ['Zach', 'Elise'], 'Constructor did not set number of passengers.');
assert.strictEqual(myMotorCycle.seats, 2, 'Must default to 2 seats.');
assert.strictEqual(myMotorCycle.running();, true)

success();