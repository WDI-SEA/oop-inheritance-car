// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// a truck instance must be instance of Truck
var truck = new Truck('Chevy', 'SilverRado', 2999, 'bleck', 3, ['Hunk Hail']);

console.log('Testing if truck is an instance of Truck');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
success();

console.log('Testing if truck is an instance of Car');
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

console.log('Testing if truck has a make property');
assert.strictEqual(truck.make, 'Chevy', 'truck should have a make property');
success();

console.log('Testing if truck has a model property');
assert.strictEqual(truck.model, 'SilverRado', 'truck should have a model SilverRado');
success();

console.log('Testing if truck has a year property');
assert.strictEqual(truck.year, 2999, 'truck should have a year 2999');
success();

console.log('Testing if truck has a color property');
assert.strictEqual(truck.color, 'bleck', 'truck should have a color bleck');
success();

console.log('Testing if truck has a seats property');
assert.strictEqual(truck.seats, 3, 'truck should have 3 seats');
success();

console.log('Testing if truck has a seats property');
assert.deepEqual(truck.passengers, ['Hunk Hail'], 'truck should have passengerss');
success();
