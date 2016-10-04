// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle');
var myMotorcycle = new Motorcycle('Harley', 'Davidson', 1989, 'Black', 2);
assert.strictEqual(myMotorcycle.make, 'Harley', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Davidson', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1989, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');

console.log('Testing wheelie');
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle did not do a sick wheelie');
success();
