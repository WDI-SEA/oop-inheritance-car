// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Yamaha', 'GXR', 2016, 'white', ['Bill Murrey']);
console.log('Testing if motorcycle is an instance of Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('Testing if motorcycle is an instance of Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

// Test Two
console.log('Testing the make of Motorcycle');
assert.strictEqual(motorcycle.make, 'Yamaha', 'motorcycle should have property make');
success();

console.log('Testing the model of Motorcycle');
assert.strictEqual(motorcycle.model, 'GXR', 'motorcycle should have property model');
success();

console.log('Testing the year of Motorcycle');
assert.strictEqual(motorcycle.year, 2016, 'motorcycle should have property year');
success();

console.log('Testing the color of Motorcycle');
assert.strictEqual(motorcycle.color, 'white', 'motorcycle should have property color');
success();

console.log('Testing the passengers of Motorcycle');
assert.deepEqual(motorcycle.passengers, ['Bill Murrey'], 'motorcycle should have property passengers');
success();

console.log('Testing a wheelie');
assert.strictEqual(motorcycle.wheelie(), false, 'motorcycle should not be able to do a wheelie (return true)');
success();

console.log('Testing a wheelie');
motorcycle.start();
assert.strictEqual(motorcycle.wheelie(), true, 'motorcycle should be able to do a wheelie (return true)');
success();

console.log('Testing if the wheelie function is attached to Car.prototype');
assert.strictEqual(typeof Car.prototype.wheelie === 'function', true, 'wheelie function should be attached to Car.prototype');
success();
