// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('testing constructor')
var myMotorcycle = new Motorcycle('Honda', 'Ninja', 1999, 'Red', 1);
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Ninja', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 1, 'Constructor did not set seats.');
assert.equal(myMotorcycle instanceof Car, true, 'does not match object.');
success();

 
// assert.equal(Motorcycle instanceof(Car, 'does not match object');