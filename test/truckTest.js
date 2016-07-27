// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Constructor');
var myTruck = new Truck('Dodge', 'Ram', '2013', 'black', 4 , 3)
var myCar = new Car('Acura', 'Integra', 1999, 'Red', 4);
assert.strictEqual((myTruck instanceof Car), true, 'make a truck you fool');
assert.strictEqual((myCar instanceof Car), true, 'make a car you jerk');
assert.strictEqual(myTruck.make, 'Dodge', 'constructor did not set make');
assert.strictEqual(myTruck.model, 'Ram', 'constructor did not set model');
assert.strictEqual(myTruck.year, '2013', 'constructor did not set year');
assert.strictEqual(myTruck.color, 'black', 'contructor did not set color');
assert.strictEqual(myTruck.seats, 4, 'constructor did not set seats');
assert.strictEqual(myTruck.passengers, 3, 'constructor did not set passengers');
success();

