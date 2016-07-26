// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var myMotorcycle = new Motorcycle('Indian', 'Scout', 1943, 'Drab Green', 1, ['Steve']);
console.log('Testing make of motorcycle');
assert.strictEqual(myMotorcycle.make, 'Indian', 'Constructor did not set make.');
success();
console.log('Testing model of motorcycle');
assert.strictEqual(myMotorcycle.model, 'Scout', 'Constructor did not set model.');
success();
console.log('Testing year of motorcycle');
assert.strictEqual(myMotorcycle.year, 1943, 'Constructor did not set year.');
success();
console.log('Testing color of motorcycle');
assert.strictEqual(myMotorcycle.color, 'Drab Green', 'Constructor did not set color.');
success();
console.log('Testing seats of motorcycle');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
success();
console.log('Testing passengers on motorcycle');
assert.deepEqual(myMotorcycle.passengers, ['Steve'], 'Constructor did not set passengers.');
success();
console.log('Do a wheelie.')
assert.strictEqual(myMotorcycle.running, false, 'Motorcycle does not turn  off.');
myMotorcycle.wheelie();
assert.strictEqual(myMotorcycle.running, true, 'Motorcycle does not turn  on.');
success("Doing a sick wheelie!!");