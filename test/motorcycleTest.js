// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

// a motocycle instance must be an instance of Motorcycle
var motorcycle = new Motorcycle('BMW', 'lazer', 2016, 'black', ['Hank Hill']);

console.log('Testing if motorcycle is instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instanceof Motorcycle');
success();

console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instanceof Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'BMW', 'motorcycle shold have a make property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'lazer', 'motorcycle shold have a model property');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 2016, 'motorcycle shold have a year property');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'black', 'motorcycle shold have a color property');
success();

console.log('Testing if motorcycle has a seats property');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle shold have a seats property');
success();

console.log('Testing if motorcycle has a passengers property');
assert.deepEqual(motorcycle.passengers, ['Hank Hill'], 'motorcycle shold have a passengers property');
success();

console.log('Testing if motorcycle can wheelie');
motorcycle.start();
assert.strictEqual(motorcycle.wheelie(), true, 'the motorcycle should be wheeling');
success();
