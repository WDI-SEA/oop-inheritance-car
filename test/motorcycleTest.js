// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Constructor');
var myMotorcycle = new Motorcycle('Ducati', '1098s', 2007, 'Red', 2);
assert.strictEqual(myMotorcycle.make, 'Ducati', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, '1098s', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2007, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
success();


console.log('Testing wheelie');
assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Failed to pop a wheelie');
success();
