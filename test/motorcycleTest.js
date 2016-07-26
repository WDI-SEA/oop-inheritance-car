// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

var motorcycle = new Motorcycle('Harley', 'Ninja', 1987, 'blue', 2, ['Fred', 'Barney', 'Wilma', 'Betty']);

// motorcycle must be instanceof Motorcycle
console.log('Testing if motorcycle is instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be instanceof Motorcycle');
success();

// motorcycle must be instanceof Car
console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be instanceof Car');
success();

// motorcycle must have "make" parameter
console.log('Testing if motorcycle has "make" parameter');
assert.strictEqual(motorcycle.make, 'Harley', 'motorcycle should have "make" parameter');
success();

// motorcycle must have "model" parameter
console.log('Testing if motorcycle has "model" parameter');
assert.strictEqual(motorcycle.model, 'Ninja', 'motorcycle should have "model" parameter');
success();

// motorcycle must have "year" parameter
console.log('Testing if motorcycle has "year" parameter');
assert.strictEqual(motorcycle.year, 1987, 'motorcycle should have "year" parameter');
success();

// motorcycle must have "seats" parameter
console.log('Testing if motorcycle has "seats" parameter');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have "seats" parameter');
success();

// motorcycle must have "passengers" parameter
console.log('Testing if motorcycle has "passengers" parameter');
assert.deepEqual(motorcycle.passengers, ['Fred', 'Barney', 'Wilma', 'Betty'], 'motorcycle should have "passengers" parameter');
success();

// Wheelie function tests

// motorcycle must perform "wheelie" when wheelie(); is called, but only if running
console.log('Testing if motorcycle can perform wheelie when not running');
assert.strictEqual(motorcycle.wheelie(), false, 'motorcycle should not perform a wheelie while NOT running');
success();

console.log('Testing if motorcycle does a wheelie when running');
assert.strictEqual(motorcycle.wheelie(), false, 'motorcycle should perform a wheelie when running');
success();

console.log('Testing if the wheelie function is attached to Car.prototype');
assert.strictEqual(typeof Car.prototype.wheelie === 'function', true, 'wheelie function should be attached to Car.prototype');
success();
