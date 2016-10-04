// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

// test constructor
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Harley', 'F2000', 2006, 'Black', 2);
assert.strictEqual(myMotorcycle.make, 'Harley', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'F2000', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2006, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.strictEqual(Car.prototype.isPrototypeOf(myMotorcycle), true, 'myMotorcycle is not an instance of Car');
assert.strictEqual(Motorcycle.prototype.isPrototypeOf(myMotorcycle), true, 'myMotorcycle is not an instance of Motorcycle');
success();


// test wheelie function
console.log('Testing wheelie');
assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycle does wheelie when not running');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle not doing wheelie while running');
success('SUCCESS!!! woot.');
