// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');

var myMotorcycle = new Motorcycle('Honda', 'CBR600', 2016, 'Red')
assert.strictEqual(myMotorcycle instanceof Car, true, "Not an instance of Car");
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, "Not an instance of Truck");
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'CBR600', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');

console.log('Test for Wheelie');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycle cannot perform sick Wheelie wihle not running.');
assert.strictEqual(typeof Motorcycle.prototype.wheelie === 'function', true, 'wheelie function should be attached to Motorcycle.prototype');
success('Your Motorcycle is Ready.');
