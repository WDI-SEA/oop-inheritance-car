// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

var truck = new Truck('Chevy', 'Tahoe', 2016, 'blue', ['Hank Hill']);
// truck instance must be instanceof Truck
console.log('Testing if truck is instanceof Truck');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
success();

// truck instance must be instanceof Car
console.log('Testing if truck is instanceof Car');
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

// truck instance must have make property
console.log('Testing if truck has a "make" property');
assert.strictEqual(truck.make, 'Chevy', 'truck should have a "make" property');
success();

// truck instance must have model property
console.log('Testing if truck has a "model" property');
assert.strictEqual(truck.model, 'Tahoe', 'truck should have a "make" property');
success();

// truck instance must have year property
console.log('Testing if truck has a "year" property');
assert.strictEqual(truck.year, 2016, 'truck should have a "year" property');
success();

// truck instance must have color property
console.log('Testing if truck has a "color" property');
assert.strictEqual(truck.color, 'blue', 'truck should have a "color" property');
success();

// truck instance must have 3 seats
console.log('Testing if truck has a "seats" property');
assert.strictEqual(truck.seats, 3, 'truck should have 3 as the "seats" property');
success();

// truck instance must have passengers property
console.log('Testing if truck has a "passengers" property');
assert.deepEqual(truck.passengers, ['Hank Hill'], 'truck should have a "passengers" property');
success();
