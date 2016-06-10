// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Yolo', 'Bolo', 1999, 'bleck', 2, ['Hunk Hail']);

console.log('testing if motorcycle is an instance of Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('testing if motorcycle is an instance of Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Yolo', 'motorcycle should have a make property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'Bolo', 'motorcycle should have a model SilverRado');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 1999, 'motorcycle should have a year 2999');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'bleck', 'motorcycle should have a color bleck');
success();

console.log('Testing if motorcycle has a seats property');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have 2 seats');
success();

console.log('Testing if motorcycle has a seats property');
assert.deepEqual(motorcycle.passengers, ['Hunk Hail'], 'motorcycle should have passengers');
success();

console.log('Testing if moto can do  wheelie');
console.log('Doing a sick wheelie');
assert.strictEqual(typeof(motorcycle.start), 'function', 'motorcycle should have ability to do a sick wheelie');
motorcycle.start();
motorcycle.wheelie();
assert.strictEqual(motorcycle.running, true, 'motorcycle needs to be started to be able to do sick wheelie');
success();
