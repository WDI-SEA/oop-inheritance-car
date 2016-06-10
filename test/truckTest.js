// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
var truck = new Truck('Chevy', 'Silverado', 2016, 'black', ['Hank Hill']);
console.log('Testing if truck is instance of Truck');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
success();
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

console.log('Testing if truck has a make property');
assert.strictEqual(truck.make, 'Chevy', 'truck should have a make property');
success();

console.log('Testing if truck has a model property');
assert.strictEqual(truck.model, 'Silverado', 'truck should have model property');
success();

console.log('Testing if truck has a year property');
assert.strictEqual(truck.year, 2016, 'truck should have year property');
success();

console.log('Testing if truck has a seats property');
assert.strictEqual(truck.seats, 3, 'truck should have seats property');
success();

console.log('Testing if truck has a color property');
assert.strictEqual(truck.color, 'black', 'truck should have color property');
success();

console.log('Testing if truck has a passengers property');
assert.deepEqual(truck.passengers, ['Hank Hill'], 'truck should have passengers property');
success();
