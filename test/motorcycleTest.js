// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Constructor');
var myMotorcycle = new Motorcycle('Harley', 'FatBoy', 1999, 'Black', undefined, ['Harry']);
assert.strictEqual(myMotorcycle.make, 'Harley', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'FatBoy', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Is not an instance of Motorcycle');
assert.strictEqual(myMotorcycle instanceof Car, true, 'Is not an instance of Car');

console.log('testing wheelie function');
assert.strictEqual(myMotorcycle.wheelie(), false, 'not running, not returning boolean value for wheelie f(x)');
assert.strictEqual(typeof Motorcycle.prototype.wheelie === "function", true, 'not returning boolean value for wheelie f(x)');

success();