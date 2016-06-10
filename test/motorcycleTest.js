// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Honda', 'Sport', 1998, 'orange', ['Court']);
console.log('Testing if motorcycle is instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Honda', 'motorcycle should have a make property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'Sport', 'motorcycle should have a model property');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 1998, 'motorcycle should have a year property');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'orange', 'motorcycle should have a color property');
success();

console.log('Testing if motorcycle has 2 seats');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have 2 seats');
success();

console.log('Testing if motorcycle has passengers');
assert.deepEqual(motorcycle.passengers, ['Court'], 'motorcycle should have passengers');
success();

// wheelie functions

console.log('Testing if motorcycle does a wheelie when not running');
assert.strictEqual(motorcycle.wheelie(), false, 'motorcycle should not perform a wheelie when not running');
success();

console.log('Testing if motorcycle does a wheelie when running');
motorcycle.start();
assert.strictEqual(motorcycle.wheelie(), true, 'motorcycle should perform a wheelie when running');
success();

console.log('Testing if the wheelie function is attached to Car.prototype');
assert.strictEqual(typeof Car.prototype.wheelie === 'function', true, 'wheelie function should be attached to Car.prototype');
success();
