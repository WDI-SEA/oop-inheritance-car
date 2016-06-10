// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Harley', 'Softtail', 2000, 'black', ['Rob']);
console.log('Testing if motorcycle is instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Harley', 'motorcycle should have a "make" property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'Softtail', 'motorcycle should have a "model" property');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 2000, 'motorcycle should have a "year" property');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'black', 'motorcycle should have a "color" property');
success();

console.log('Testing if motorcycle has 3 seats');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have 3 seats');
success();

console.log('Testing if motorcycle has passengers');
assert.deepEqual(motorcycle.passengers, ['Rob'], 'motorcycle should have passengers');
success();

console.log('checking wheelie status...');
assert.equal(typeof(motorcycle.start), 'function', 'there is no start() function');
motorcycle.start();
motorcycle.wheelie();
assert.strictEqual(motorcycle.running, true, 'failed to start the motorcycle');
success();
