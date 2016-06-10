// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
//a motocycle must be an instance of a Motorcycle
var motorcycle = new Motorcycle('Honda', '90cc', 1985, 'hot pink', ['Hank Hill']);
console.log('Testing if motorcycle is instance of Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('Testing if motorcycle is instance of Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Honda', 'motorcycle should have a make property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, '90cc', 'motorcycle should have a model property');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 1985, 'motorcycle should have a year property');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'hot pink', 'motorcycle should have a color property');
success();

console.log('Testing if motorcycle has 2 seats');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have 3 seats');
success();

console.log('Testing if motorcycle has passengers');
assert.deepEqual(motorcycle.passengers, ['Hank Hill'], 'motorcycle should have passengers');
success();

console.log('Testing for a sick wheelie');
motorcycle.running = true;
// assert.strictEqual(motorcycle.running, true, 'motorcycle is not running');
assert.strictEqual(motorcycle.wheelie(), true, 'do a wheelie you sucka');
success();
