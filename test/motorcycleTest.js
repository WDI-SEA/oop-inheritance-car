// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
// test constructor
console.log('Testing Constructor');
var myMotorcycle = new Motorcycle('Ducati', 'Monster', 2016, 'Blue', 1);
assert.strictEqual(myMotorcycle.make, 'Ducati', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Monster', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Blue', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 1, 'Constructor did not set seats.');

success('MOTORCYCLE CONSTRUCTOR TEST success');

// test wheelie
console.log('Testing wheelie');
assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function');
assert.strictEqual(typeof(myMotorcycle.wheelie()), 'boolean', 'wheelie function did not return a boolean value');
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycle allowed wheelie while NOT running.');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle did not allow wheelie while running.');
success("MOTORCYCLE WHEELIE TEST SUCCESS");