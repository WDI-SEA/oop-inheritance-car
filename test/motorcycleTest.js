// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Harley', 'Bucel', 1986, 'Black', 2, ['Bobby Hill']);

console.log('Testing if motorcycle is instanceof motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'Motorcycle should be an instance of motorcycle');
success();

console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'Motorcycle should be an instance of Car');
success();

console.log('motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Harley', 'Motorcycle has a make property');
success();

console.log('motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'Bucel', 'Motorcycle has a model property');
success();

console.log('motorcycle has a year property');
assert.strictEqual(motorcycle.year, 1986, 'Motorcycle has a year property');
success();

console.log('motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'Black', 'Motorcycle has a color property');
success();

console.log('motorcycle has 2 seats');
assert.strictEqual(motorcycle.seats, 2, 'Motorcycle has a seats property');
success();

console.log('motorcycle has a passengers property');
assert.deepEqual(motorcycle.passengers, ['Bobby Hill'], 'Motorcycle has passengers');
success();

console.log('Checking for wheelies');
assert.equal(typeof(motorcycle.start), 'function', 'there is no start() function');
motorcycle.start();
motorcycle.wheelie();
assert.strictEqual(motorcycle.running, true, 'Failed to start the motorcycle. running should = true');
success();

