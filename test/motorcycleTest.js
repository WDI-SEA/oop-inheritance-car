// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

var motorcycle = new Motorcycle('Honda', '1234', 1980, 'red', ['Rick Lickins']);

console.log('Testing if motorcyle is an instance of Motorycycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, 'motorcycle should be an instance of Motorcycle');
success();

console.log('Testing if motorcyle is an instance of Car');
assert.strictEqual(motorcycle instanceof Car, true, 'motorcycle should be an instance of Car');
success();

console.log('Testing if motorcyle has a property of make');
assert.strictEqual(motorcycle.make, 'Honda', 'motorcycle should have a make property');
success();

console.log('Testing if motorcyle has a property of model');
assert.strictEqual(motorcycle.model, '1234', 'motorcycle should have a model property');
success();

console.log('Testing if motorcyle has a property of year');
assert.strictEqual(motorcycle.year, 1980, 'motorcycle should have a year property');
success();

console.log('Testing if motorcyle has a property of color');
assert.strictEqual(motorcycle.color, 'red', 'motorcycle should have a color property');
success();

console.log('Testing if motorcyle has a property of seats');
assert.strictEqual(motorcycle.seats, 2, 'motorcycle should have a seats property');
success();

console.log('Testing if motorcyle has a property of passengers');
assert.deepEqual(motorcycle.passengers, ['Rick Lickins'], 'motorcycle should have a passengers property');
success();


motorcycle.running = true;
var wheelieTest = motorcycle.wheelie();

console.log('Testing if motorcyle can do a wheelie');
assert.strictEqual(wheelieTest, true, 'motorcycle should be able to do a wheelie');
success();


motorcycle.running = false;
wheelieTest = motorcycle.wheelie();

console.log('Testing if motorcycle is not doing a wheelie');
assert.strictEqual(wheelieTest, false, 'mortocycle sould return false for a wheelie');
success();
