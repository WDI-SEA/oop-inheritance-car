// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
var truck = new Truck('Chevy', 'Silverado', 1970, 'Black', 3, ['Hank Hill']);
console.log('Testing if truck is instanceof Truck');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
success();

console.log('Testing if truck is instanceof Car');
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

console.log('Truck has a make property');
assert.strictEqual(truck.make, 'Chevy', 'truck has a make property');
success();

console.log('Truck has a model property');
assert.strictEqual(truck.model, 'Silverado', 'truck has a model property');
success();

console.log('Truck has a year property');
assert.strictEqual(truck.year, 1970, 'truck has a year property');
success();

console.log('Truck has a color property');
assert.strictEqual(truck.color, 'Black', 'truck has a color property');
success();

console.log('Truck has 3 seats');
assert.strictEqual(truck.seats, 3, 'truck has a seats property');
success();

console.log('Truck has a passengers property');
assert.deepEqual(truck.passengers, ['Hank Hill'], 'truck has passengers');
success();
