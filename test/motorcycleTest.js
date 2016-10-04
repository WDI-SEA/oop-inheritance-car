// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log("Testing Motorcycle constructor")

var myMoto = new Motorcycle('Ducatti', 'F500', 2012, 'Black', 2);

assert.strictEqual(myMoto instanceof Car, true, "Not an instance of a car");
assert.strictEqual(myMoto instanceof Motorcycle, true, "Not an instance of a motorcycle");
assert.strictEqual(myMoto.make, 'Ducatti', 'Constructor did not set make.');
assert.strictEqual(myMoto.model, 'F500', 'Constructor did not set model.');
assert.strictEqual(myMoto.year, 2012, 'Constructor did not set year.');
assert.strictEqual(myMoto.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMoto.seats, 2, 'Constructor did not set seats.');


console.log("Testing if you can wheelie");
assert.strictEqual(myMoto.wheelie(), false, 'motorcycle should not perform a wheelie while NOT running');
assert.strictEqual(typeof Motorcycle.prototype.wheelie === 'function', true, 'Wheelie function needs to be part of motorcycle.prototype');
success('Motorcycle good');
