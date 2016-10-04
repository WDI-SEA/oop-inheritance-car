// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

var myMotorcycle = new Motorcycle('Honda', 'Interceptor', 2000, 'blue', 2, 1, true);

// Test... Make
assert.strictEqual(myMotorcycle.make, 'Honda', 'Your motorcycle isn\'t a Honda!');
success('Your motorcycle is a Honda!');

// Test... Model
assert.strictEqual(myMotorcycle.model, 'Interceptor', 'Your Honda motorcycle isn\'t a Interceptor!');
success('Your motorcycle is a Honda Interceptor!');

// Test... Year
assert.strictEqual(myMotorcycle.year, 2000, 'Your Honda Interceptor isn\'t from 2000!');
success('You have a 2000 Honda Interceptor!');

// Test... Color
assert.strictEqual(myMotorcycle.color, 'blue', 'Your 2000 Honda Interceptor isn\'t blue!');

// Test... Passengers
assert.strictEqual(myMotorcycle.passengers, 1, 'There is not just one 1 passenger!');
success('There is only one passenger!');

myMotorcycle.wheelie();

