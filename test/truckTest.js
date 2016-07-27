// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');
// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');
// Your tests will go below here
// a truck instance must be an instance of Truck
var truck = new Truck('Chevy', 'Silverado', 2016, 'black', ['Hank Hill']);
console.log('Testing if truck is instanceof Truck');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
success();
console.log('Testing if truck is instanceof car');
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

console.log('Testing if truck has a make property');
assert.strictEqual(truck.make, 'Chevy', 'truck shold have a make property');
success();

console.log('Testing if truck has a model property');
assert.strictEqual(truck.model, 'Silverado', 'truck shold have a model property');
success();

console.log('Testing if truck has a year property');
assert.strictEqual(truck.year, 2016, 'truck shold have a year property');
success();

console.log('Testing if truck has a color property');
assert.strictEqual(truck.color, 'black', 'truck shold have a color property');
success();

console.log('Testing if truck has a seats property');
assert.strictEqual(truck.seats, 3, 'truck shold have a seats property');
success();

console.log('Testing if truck has a passengers property');
assert.deepEqual(truck.passengers, ['Hank Hill'], 'truck shold have a passengers property');
success();
