// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Checking Truck instance');
var myTruck = new Truck('Ford', 'F150', 2014, 'blue', 1000, ['Brian']);
assert.strictEqual(myTruck instanceof Truck, true, 'Constructor is not instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Constructor is not instance of Car');
success('Truck is instance of Truck and Car');


console.log('Testing Truck Constructor');
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make');
assert.strictEqual(myTruck.model, 'F150', 'Constructor did not set model');
assert.strictEqual(myTruck.year, 2014, 'Constructor did not set year');
assert.strictEqual(myTruck.color, 'blue', 'Constructor did not set color');
assert.strictEqual(myTruck.cargoInPounds, 1000, 'Constructor did not set cargo in pounds');
assert.deepEqual(myTruck.passengers, ['Brian'], 'Constructor did not set passengers');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats to default to 3');
success('Truck constructor complete!');
