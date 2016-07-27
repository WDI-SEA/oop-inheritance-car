// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here


var motorcycle = new Motorcycle('Suzuki', 'GSXR', 2013, 'white', 2, ['Chris Madison']);
console.log('Testing if motorcycle is instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();


console.log('Testing if motorcycle is instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcycle has a make property');
assert.strictEqual(motorcycle.make, 'Suzuki', 'motorcycle should have a make property');
success();

console.log('Testing if motorcycle has a model property');
assert.strictEqual(motorcycle.model, 'GSXR', 'motorcycle should have a model property');
success();

console.log('Testing if motorcycle has a year property');
assert.strictEqual(motorcycle.year, 2013, 'motorcycle should have a year property');
success();

console.log('Testing if motorcycle has a color property');
assert.strictEqual(motorcycle.color, 'white', 'motorcycle should have a color property');
success();

console.log('Testing if motorcycle has 2 seats');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have a 3 property');
success();

console.log('Testing if motorcycle has passengers property');
assert.deepEqual(motorcycle.passengers, ['Chris Madison'], 'motorcycle should have a passengers property');
success();


// Wheelie function

console.log('Testing Motorcycle wheelie');
motorcycle.start();
assert.strictEqual(motorcycle.wheelie(), true, 'Motorcycle did not do a wheelie when turned on');
success('Motorcycle wheelie complete!');
